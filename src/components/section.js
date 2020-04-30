/** @jsx jsx */
import { jsx, Box } from "theme-ui";

function Section(props) {
  const {
    backgroundColor,
    backgroundGradient,
    backgroundImage,
    children,
  } = props;

  return (
    <Box
      as="section"
      sx={{
        bg: backgroundColor ? backgroundColor : "background",
        background: backgroundGradient
          ? backgroundGradient
          : backgroundImage
          ? backgroundImage
          : null,
      }}
    >
      {children}
    </Box>
  );
}

export default Section;
