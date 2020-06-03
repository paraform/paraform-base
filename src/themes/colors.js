import { colors as defaultColors } from "./base";
import { merge } from "theme-ui";

const colors = merge(defaultColors, {
  cream: "#f4f0eb",
  yellow: "#F9ED96",
  green: "#DDFE8F",
  orange: "#F6D196",
  purple: "#CEC4F5",
  red: "#F9B5B1",
  blue: "#A5E4F2",
  cyan: "#8DEBC5",
});

const modes = {
  yellow: {
    text: colors.black,
    background: colors.yellow,
  },
  blue: {
    text: colors.black,
    background: colors.blue,
  },
};

const modeNames = Object.keys(modes);

export const initialColorMode = "default";

export const modeList = [initialColorMode, ...modeNames];

export default {
  text: colors.black,
  background: colors.white,
  modes,
};
