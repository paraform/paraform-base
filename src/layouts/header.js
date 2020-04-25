/** @jsx jsx */
import { jsx, Flex, Box, IconButton, useColorMode } from "theme-ui";
import { Logo, Drop } from "../components/svg";

const modes = [
  "cream",
  "yellow",
  "green",
  "orange",
  "cyan",
  "red",
  "blue",
  "purple",
];

const Header = () => {
  const [mode, setMode] = useColorMode();

  const cycleMode = (e) => {
    const i = modes.indexOf(mode);
    const next = modes[(i + 1) % modes.length];
    setMode(next);
  };
  return (
    <Box
      as="header"
      sx={{
        position: "absolute",
        width: "100%",
        zIndex: "header",
        pt: [0, null, 4],
      }}
    >
      <Flex
        sx={{
          width: "100%",
          px: [4, 5],
          py: 4,
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "left",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ height: [50, null, 70], pl: 2 }}>
          <Logo fill="white" />
        </Box>
        <IconButton
          aria-label="Toggle color mode"
          onClick={cycleMode}
          sx={{
            ml: 2,
            border: 1,
            borderColor: "background",
            bg: "black",
            alignSelf: "center",
            color: "background",
            "&:focus": {
              outline: "none",
              boxShadow: (theme) => `${theme.shadows.outline}`,
              transition: "all 0.2s",
            },
          }}
        >
          <Drop />
        </IconButton>
      </Flex>
    </Box>
  );
};

export default Header;
