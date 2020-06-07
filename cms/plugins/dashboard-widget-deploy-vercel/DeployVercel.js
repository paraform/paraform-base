import React, { useState, useEffect, useRef } from "react";
import fetch from "node-fetch";
// https://github.com/css-modules/css-modules
import styles from "./DeployVercel.css";
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
const DeployVercel = () => {
  const [deploying, setDeploying] = useState(false);
  const [jobId, setJobId] = useState(null);
  const [deployments, setDeployments] = useState([]);
  const updateList = () => {
    // https://vercel.com/docs/api?query=api#endpoints/deployments/list-deployments
    fetch("https://api.zeit.co/v5/now/deployments?limit=5", {
      headers: {
        Authorization: `Bearer ${process.env.SANITY_STUDIO_VERCEL_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((json) => setDeployments(json.deployments));
  };
  useEffect(() => {
    updateList();
  }, []); // update the list initially
  useInterval(() => {
    if (!jobId) {
      return;
    }
    updateList();
  }, 5000);
  const deploy = () => {
    setDeploying(true);
    // https://vercel.com/docs/v2/more/deploy-hooks?query=deploy%20hoo#triggering-a-deploy-hook
    fetch(process.env.SANITY_STUDIO_VERCEL_DEPLOY_HOOK, { method: "POST" })
      .then((res) => res.json())
      .then((json) => {
        setJobId(json.job.id);
        updateList();
      });
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Deploy to Vercel</h2>
      </header>
      <button
        className={styles.button}
        type="button"
        onClick={deploy}
        disabled={deploying}
      >
        {deploying ? "Deploying..." : "Deploy"}
      </button>
      <ol className={styles.list}>
        {deployments.map((deployment) => (
          <li key={deployment.uid}>
            <p>
              {new Date(deployment.created).toLocaleString()} (
              {deployment.state})
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default DeployVercel;
