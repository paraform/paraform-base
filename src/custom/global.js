/** @jsx jsx */
import { jsx } from "theme-ui";
import { css, Global } from "@emotion/core";

const globalStyles = (theme) => css`
  @font-face {
    font-family: "Bw Aleta No 20 DEMO";
    src: url("/fonts/BwAletaNo20DEMO-Light.woff2") format("woff2"),
      url("/fonts/BwAletaNo20DEMO-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Bw Aleta No 20 DEMO Light It";
    src: url("/fonts/BwAletaNo20DEMO-LightItalic.woff2") format("woff2"),
      url("/fonts/BwAletaNo20DEMO-LightItalic.woff") format("woff");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "Bw Aleta No 20 DEMO";
    src: url("/fonts/BwAletaNo20DEMO-BoldItalic.woff2") format("woff2"),
      url("/fonts/BwAletaNo20DEMO-BoldItalic.woff") format("woff");
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: "Bw Aleta No 20 DEMO";
    src: url("/fonts/BwAletaNo20DEMO-Bold.woff2") format("woff2"),
      url("/fonts/BwAletaNo20DEMO-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }

  ::selection {
    color: ${theme.colors.background};
    background: ${theme.colors.text};
  }
`;
const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
