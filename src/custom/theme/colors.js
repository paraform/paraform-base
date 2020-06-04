const colors = {
  black: "#000000",
  white: "#ffffff",
  cream: "#f4f0eb",
  yellow: "#F9ED96",
  green: "#DDFE8F",
  orange: "#F6D196",
  purple: "#CEC4F5",
  red: "#F9B5B1",
  blue: "#A5E4F2",
  cyan: "#8DEBC5",
};

export const uiColors = {
  background: colors.white,
  text: colors.black,
};

export const initialColorMode = "default";

export const modes = {
  yellow: {
    text: colors.black,
    background: colors.yellow,
  },
  green: {
    text: colors.black,
    background: colors.green,
  },
  blue: {
    text: colors.black,
    background: colors.blue,
  },
};

export default {
  ...colors,
  ...uiColors,
  modes,
};
