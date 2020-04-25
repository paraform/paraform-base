/** @jsx jsx */
import { jsx } from "theme-ui";
import { css, Global } from "@emotion/core";

const globalStyles = (theme) => css`
  @font-face {
    font-family: "Bw Aleta No 10 DEMO";
    src: url("/fonts/BwAletaNo10DEMO-Light.woff2") format("woff2"),
      url("/fonts/BwAletaNo10DEMO-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Bw Aleta No 10 DEMO Light It";
    src: url("/fonts/BwAletaNo10DEMO-LightItalic.woff2") format("woff2"),
      url("/fonts/BwAletaNo10DEMO-LightItalic.woff") format("woff");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "Bw Aleta No 10 DEMO";
    src: url("/fonts/BwAletaNo10DEMO-BoldItalic.woff2") format("woff2"),
      url("/fonts/BwAletaNo10DEMO-BoldItalic.woff") format("woff");
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: "Bw Aleta No 10 DEMO";
    src: url("/fonts/BwAletaNo10DEMO-Bold.woff2") format("woff2"),
      url("/fonts/BwAletaNo10DEMO-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }
  ,
  body {
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "kern";
  }
  ::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.black};
  }
`;
const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
