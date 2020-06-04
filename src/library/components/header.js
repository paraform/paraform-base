/** @jsx jsx */
import { jsx, Flex, Box, IconButton, useColorMode } from "theme-ui";
import { Drop } from "./svg";
import { initialColorMode, modes } from "custom";

const modesList = [initialColorMode];

const Header = () => {
  const [mode, setMode] = useColorMode();

  const cycleMode = (e) => {
    const i = modesList.indexOf(mode);
    const next = modesList[(i + 1) % modesList.length];
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
        <Box sx={{ height: [40, null, 60], pl: 2 }}></Box>
        {modes.length > 1 ? (
          <IconButton
            aria-label="Toggle color mode"
            onClick={cycleMode}
            sx={{
              ml: 2,
              border: 1,
              borderColor: "background",
              bg: "text",
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
        ) : null}
      </Flex>
    </Box>
  );
};

export default Header;
