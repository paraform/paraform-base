/** @jsx jsx */
import { jsx, IconButton, useColorMode } from "theme-ui";

const ColorSwitch = ({ icon, modes }) => {
  const [mode, setMode] = useColorMode();

  const cycleMode = (e) => {
    const i = modes.indexOf(mode);
    const next = modes[(i + 1) % modes.length];
    setMode(next);
  };

  console.log(modes);

  return modes.length > 1 ? (
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
        "&:hover": {
          bg: "primary.500",
        },
        "&:focus": {
          outline: "none",
          boxShadow: (theme) => `${theme.shadows.outline}`,
          transition: "all 0.2s",
        },
      }}
    >
      {icon}
    </IconButton>
  ) : null;
};

export default ColorSwitch;
