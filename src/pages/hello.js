import { useEffect } from "react";

const getHost = (req) => {
  if (!req) return "";
  const host = req.headers.host;
  const protocol =
    req.connection && req.connection.encrypted ? "https://" : "http://";
  return `${protocol}${host}`;
};

const username = async (req) => {
  const userFetch = await fetch(`${getHost(req)}/api/user`);
  const userData = await userFetch.json();
  return userData.user;
};

export default ({ user }) => {
  useEffect(() => {
    void (async () => {
      console.log(await username());
    })();
  });
  return <h1>Hello {user}.</h1>;
};

export async function getServerSideProps({ req }) {
  return {
    props: { user: await username(req) },
  };
}
