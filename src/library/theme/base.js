export const systemFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

export const monoFonts =
  'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const defaultFonts = {
  body: `${systemFonts}`,
  heading: "inherit",
  monospace: `${monoFonts}`,
};

const headingStyles = {
  lineHeight: "heading",
  letterSpacing: "tight",
  mt: 0,
  fontWeight: "bold",
};

export const defaultColors = {
  black: "#000000",
  white: "#ffffff",
  whiteAlpha: "rgba(255,255,255,0.5)",
  primary: {
    50: "#ece6ff",
    100: "#c6b3ff",
    200: "#a180ff",
    300: "#7b4dff",
    400: "#6833ff",
    500: "#3333ee",
    600: "#3b00e6",
    700: "#2e00b3",
    800: "#210080",
    900: "#14004c",
    alpha: { 400: "rgba(123,77,255, 0.3)", 500: "rgba(51,51,238, 0.3)" },
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
};

export default {
  initialColorModeName: "default",
  colors: {
    ...defaultColors,
    text: defaultColors.white,
    background: defaultColors.black,
    logoDark: defaultColors.white,
    logoMid: "#f2f2f2",
    logoLight: "#f8f8f8",
  },
  fontSizes: [14, 16, 18, 26, 30, 42, 54, 62],
  fonts: {
    ...defaultFonts,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    body: 1.4,
    heading: 1.1,
  },
  letterSpacings: {
    normal: "normal",
    tight: -0.8,
    loose: 1.3,
  },
  text: {
    heading1: {
      ...headingStyles,
      fontSize: [5, null, null, 6],
      mb: 5,
    },
    heading2: {
      ...headingStyles,
      fontSize: [4, 5],
      mb: 4,
    },
    heading3: {
      ...headingStyles,
      fontSize: [3, 4],
      mb: 4,
    },
    heading4: {
      ...headingStyles,
      fontSize: [3],
      mb: 3,
    },
    heading5: {
      ...headingStyles,
      fontSize: [1, 2],
      mb: 3,
    },
    caption: {
      fontSize: 0,
      lineHeight: "body",
    },
    overline: {
      fontSize: 0,
      lineHeight: "body",
      textTransform: "uppercase",
      mb: 3,
    },
    large: {
      fontSize: 3,
      lineHeight: "body",
      p: 0,
      mb: 4,
    },
  },
  breakpoints: [32, 48, 64, 96, 128].map((w) => `${w}em`),
  space: [0, 4, 8, 12, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 12, 16, 32, 64, 128, 256, 512],
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    header: 10,
    alert: 20,
  },
  radii: [0, 4, 8, 16, 9999],
  shadows: {
    outline: "0 0 0 3px rgba(0,0,0, 0.6)",
    buttonHover: "10px 10px 35px -12px rgba(0,0,0,0.57)",
    inputShadow: "4px 4px 20px -4px rgba(0,0,0,0.5)",
    none: "none",
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
      lineHeight: "body",
    },
    a: {
      color: "text",
      cursor: "pointer",
      textDecoration: "underline",
      "&:hover": {
        color: "primary.500",
      },
    },
  },
};
