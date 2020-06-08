import React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "theme-ui";

import { Global, theme } from "custom";
import { CSSReset } from "library";

export default class App extends NextApp {
  render() {
    console.log(theme);
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
