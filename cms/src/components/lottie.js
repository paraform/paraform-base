import React from "react";
import { createRef, useEffect, useState } from "react";
import lottie from "lottie-web";
import { throttle } from "lodash";

// https://stackoverflow.com/a/28241682/665261
const getWindowHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

const segmentsFromData = ({ op, ip }) => [
  [0, op],
  [ip, op],
];

const Lottie = ({ data }) => {
  const { h, w } = data;
  const paddingTop = `${(h / w) * 100}%`;
  const el = createRef();

  const [activated, setActivated] = useState(false);

  const positionGetter = () => {
    const { top, height } = (el.current &&
      el.current.getBoundingClientRect()) || {
      top: 0,
      height: 0,
    };

    return { elementTop: top, elementHeight: height };
  };

  useEffect(() => {
    const clearListeners = (interval, listener) => {
      clearInterval(interval);
      listener.cancel();
      window.removeEventListener("scroll", listener);
      window.removeEventListener("resize", listener);
    };

    const options = {
      container: el.current,
      loop: true,
      autoplay: false,
      segments: segmentsFromData(data),
      animationData: data,
    };

    let anim = lottie.loadAnimation({
      ...options,
      animationData: JSON.parse(JSON.stringify(data)),
    });

    anim.setDirection(-1);
    anim.playSegments([[0, 1]], true);
    anim.setDirection(1);
    anim.pause();

    // Set up scroll and interval listeners
    const listener = throttle(() => {
      if (!anim) {
        return;
      }

      const windowHeight = getWindowHeight();
      const { elementTop, elementHeight } = positionGetter();

      if (windowHeight - elementTop > elementHeight / 2) {
        setActivated(true);
        clearListeners(interval, listener);
        anim.playSegments(options.segments, true);
      }
    }, 100);

    const interval = setInterval(
      () => window.requestAnimationFrame(listener),
      200
    );

    window.addEventListener("scroll", listener);
    window.addEventListener("resize", listener);

    // Teardown on unmount
    return () => {
      clearListeners(interval, listener);

      anim.destroy();
      options.animationData = null;
      anim = null;
    };
  }, []);

  const lottieStyles = {
    width: "100%",
    paddingTop,
    height: 0,
    position: "relative",
    overflow: "hidden",
    margin: "0 auto",
    outline: "none",
  };

  return <div ref={el} />;
};

export default Lottie;
