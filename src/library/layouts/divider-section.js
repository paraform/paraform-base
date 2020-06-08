/** @jsx jsx */
import { jsx, Box } from "theme-ui";

const SVGShape = ({ shape }) => (
  <svg role="img" viewBox="0 0 1200 40" preserveAspectRatio="none">
    <path d={shape} />
  </svg>
);

const DividerSection = ({
  topColor = "background",
  bottomColor = "background",
  shape,
}) => (
  <Box
    as="section"
    sx={{
      bg: bottomColor,
      fill: topColor,
      overflow: "hidden",
      height: [7, null, 6],
      "& > svg": {
        display: "block",
        transform: "scale(1)",
        height: "100%",
        width: "100%",
      },
    }}
  >
    <SVGShape shape={shape} />
  </Box>
);

export default DividerSection;
