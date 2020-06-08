/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import ColorSwitch from "./color-switch";
import IconButton from "./icon-button";
import { Twitter, Instagram, Facebook } from "./svg";

const Header = ({ colorModeSwitchIcon, logo, modes, socials }) => {
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
        <Box sx={{ alignSelf: "center" }}>
          {socials.instagram ? (
            <IconButton
              newTab
              icon={<Instagram />}
              link={`https://www.instagram.com/${socials.instagram}`}
            />
          ) : null}
          {socials.twitter ? (
            <IconButton
              mLeft={2}
              newTab
              icon={<Twitter />}
              link={`https://twitter.com/${socials.twitter}`}
            />
          ) : null}
          {socials.facebook ? (
            <IconButton
              mLeft={2}
              newTab
              icon={<Facebook />}
              link={`https://facebook.com/${socials.facebook}`}
            />
          ) : null}
          <ColorSwitch mLeft={4} icon={colorModeSwitchIcon} modes={modes} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
