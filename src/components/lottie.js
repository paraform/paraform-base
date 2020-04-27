import React, { Component } from "react";
import lottie from "lottie-web";

class Lottie extends Component {
  constructor() {
    super();
    this.animationLoaded = this.animationLoaded.bind(this);
    this.setElement = this.setElement.bind(this);
    this.element = null;
  }

  componentDidUpdate() {
    this.attachAnimation();
  }

  componentWillUnmount() {
    if (this.animation) {
      try {
        this.animation.destroy();
      } catch (err) {
        console.log("destroy error");
      }
      this.animation = null;
    }
    if (this.element) {
      this.element = null;
    }
  }

  setElement(elem) {
    this.element = elem;
    this.attachAnimation();
  }

  setSegment(init, end) {
    if (this.animation) {
      this.animation.setSegment(init, end);
    }
  }

  setSpeed(speed) {
    if (this.animation) {
      this.animation.setSpeed(speed);
    }
  }

  setDirection(dir) {
    if (this.animation) {
      this.animation.setDirection(dir);
    }
  }

  getCurrentFrame() {
    if (this.animation) {
      return this.animation.currentRawFrame;
    }
    return 0;
  }

  getFirstFrame() {
    if (this.animation) {
      return this.animation.firstFrame;
    }
    return 0;
  }

  animationLoaded() {
    const { animationLoaded } = this.props;
    if (animationLoaded) {
      animationLoaded();
    }
  }

  goToAndPlay(num, isFrame) {
    if (this.animation) {
      this.animation.goToAndPlay(num, isFrame);
    }
  }

  goToAndStop(num, isFrame) {
    if (this.animation) {
      this.animation.goToAndStop(num, isFrame);
    }
  }

  playSegments(segments, forceFlag) {
    if (this.animation) {
      this.animation.playSegments(segments, forceFlag);
    }
  }

  resetSegments(flag) {
    if (this.animation) {
      this.animation.resetSegments(flag);
    }
  }

  play() {
    if (this.animation) {
      this.animation.play();
    }
  }

  stop() {
    if (this.animation) {
      this.animation.stop();
    }
  }

  loop(value) {
    if (this.animation) {
      this.animation.loop = value;
    }
  }

  attachAnimation() {
    const {
      animationData,
      path,
      renderer,
      autoplay,
      loop,
      rendererSettings,
    } = this.props;
    if (!this.animation && this.element && (animationData || path)) {
      try {
        const params = {
          container: this.element,
          renderer: renderer || "svg",
          autoplay,
          loop,
          rendererSettings: {
            progressiveLoad: true,
            preserveAspectRatio: "xMidYMid slice",
            hideOnTransparent: true,
            className: "lootieItem",
          },
        };
        if (animationData) {
          params.animationData = animationData;
        } else if (path) {
          params.path = path;
        }
        if (rendererSettings) {
          params.rendererSettings = {
            ...params.rendererSettings,
            ...rendererSettings,
          };
        }
        this.animation = lottie.loadAnimation(params);
        this.animation.addEventListener("DOMLoaded", this.animationLoaded);
      } catch (err) {
        this.element.innerHTML = "";
      }
    }
  }

  render() {
    const {
      children,
      animationData,
      animationLoaded,
      autoplay,
      loop,
      path,
      renderer,
      rendererSettings,
      ...rest
    } = this.props;
    const element = <span />;
    const cloned = React.cloneElement(children || element, {
      ref: this.setElement,
      ...rest,
    });
    return cloned;
  }
}

Lottie.defaultProps = {
  autoplay: true,
  loop: false,
};

export default Lottie;
