/** @jsx jsx */
import { jsx, Box } from "theme-ui";

function Section(props) {
  const { backgroundColor, backgroundGradient, children } = props;

  return (
    <Box
      as="section"
      sx={{
        bg: backgroundColor,
      }}
    >
      <Box
        sx={{
          background: backgroundGradient ? backgroundGradient : null,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Section;
