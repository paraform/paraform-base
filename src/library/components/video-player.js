/** @jsx jsx */
import { jsx } from "theme-ui";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  return (
    <ReactPlayer
      url={url}
      playing
      loop
      playsinline
      config={{
        vimeo: {
          playerOptions: { background: true },
        },
      }}
      width="100%"
      height="100%"
    />
  );
};

export default VideoPlayer;
