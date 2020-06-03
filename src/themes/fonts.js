import { merge } from "theme-ui";
import { systemFonts, monoFonts, fonts as defaultFonts } from "./base";

const customFont = "Bw Aleta No 20 DEMO";

const fonts = merge(defaultFonts, {
  body: `"${customFont}", ${systemFonts}`,
  heading: "inherit",
  monospace: `${monoFonts}`,
});

export default {
  ...fonts,
};
