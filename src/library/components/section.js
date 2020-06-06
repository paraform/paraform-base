/** @jsx jsx */
import { jsx, Box } from "theme-ui";

function Section(props) {
  const {
    backgroundColor,
    backgroundGradient,
    textColor,
    spacing,
    children,
  } = props;

  return (
    <Box
      as="section"
      sx={{
        bg: backgroundColor ? backgroundColor : "background",
        color: textColor ? textColor : "text",
      }}
    >
      <Box
        sx={{
          background: backgroundGradient ? backgroundGradient : null,
          py:
            spacing == "large"
              ? 7
              : spacing == "medium"
              ? 6
              : spacing == "small"
              ? 5
              : 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Section;
