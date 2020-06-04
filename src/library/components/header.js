/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import ColorSwitch from "./color-switch";

const Header = ({ colorModeSwitchIcon, logo, modes }) => {
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
        {logo}
        <ColorSwitch icon={colorModeSwitchIcon} modes={modes} />
      </Flex>
    </Box>
  );
};

export default Header;
