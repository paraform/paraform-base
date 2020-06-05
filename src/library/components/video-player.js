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
      sx={{
        "& video": {
          objectFit: "cover",
          width: "100%",
          minHeight: "100%",
        },
      }}
      width="100%"
      height="100%"
    />
  );
};

export default VideoPlayer;
