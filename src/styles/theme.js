// Colours

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

// Typography

const systemFonts =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

const fonts = {
  body: `"Bw Aleta No 20 DEMO", ${systemFonts}`,
  heading: "inherit",
  monospace:
    'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

const headingStyles = {
  lineHeight: "heading",
  letterSpacing: "tight",
  mt: 0,
};

export default {
  initialColorModeName: "cream",
  colors: {
    ...colors,
    text: colors.black,
    background: colors.cream,
    modes: {
      yellow: {
        background: colors.yellow,
      },
      green: {
        background: colors.green,
      },
      brown: {
        background: colors.brown,
      },
      orange: {
        background: colors.orange,
      },
      cyan: {
        background: colors.cyan,
      },
      red: {
        background: colors.red,
      },
      blue: {
        background: colors.blue,
      },
      purple: {
        background: colors.purple,
      },
    },
  },
  fontSizes: [14, 16, 18, 26, 30, 42, 54, 62],
  fonts: {
    ...fonts,
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
    },
    heading2: {
      ...headingStyles,
      fontSize: [4, 5],
    },
    heading3: {
      ...headingStyles,
      fontSize: [3, 4],
      // fontWeight: 300,
    },
    heading4: {
      ...headingStyles,
      fontSize: [3],
    },
    heading5: {
      ...headingStyles,
      fontSize: [1, 2],
    },
    large: {
      fontSize: 2,
      lineHeight: "shorter",
      mt: 0,
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
    none: "none",
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
      lineHeight: "body",
    },
  },
};
