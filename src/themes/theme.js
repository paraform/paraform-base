import { merge } from "theme-ui";
import baseTheme from "./base";
import colors, { initialColorMode } from "./colors";
import fonts from "./fonts";

export default merge(baseTheme, {
  initialColorModeName: initialColorMode,
  colors,
  fonts,
});
