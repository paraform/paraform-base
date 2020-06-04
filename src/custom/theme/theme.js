import { merge } from "theme-ui";
import { baseTheme } from "library";
import { initialColorMode, default as colors } from "./colors";
import { default as fonts } from "./fonts";

export default merge(baseTheme, {
  initialColorModeName: initialColorMode,
  colors,
  fonts,
});
