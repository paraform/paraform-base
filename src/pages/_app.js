import React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "theme-ui";

import { Global } from "styles";
import { theme } from "themes";

export default class App extends NextApp {
  render() {
    console.log(theme);
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
