/** @jsx jsx */
import { jsx } from "theme-ui";

const SVG = ({ height = "100%", viewBox = "0 0 400 600" }) => (
  <svg
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      sx={{ fill: "logoDark" }}
      d="M0 0h200.23v200.23H0zM0 400.45h200.23v200.23H0z"
    />
    <path
      sx={{ fill: "logoMid" }}
      d="M200.23 400.45L0 200.23h200.23l200.22 200.22H200.23z"
    />
    <path
      sx={{ fill: "logoLight" }}
      d="M400.45 200.23L200.23 0v200.23l200.22 200.22V200.23z"
    />
  </svg>
);

export default SVG;
