import { createGlobalStyle } from "styled-components";
import { theme } from "styled-tools";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Bazier Square, Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }
  body {
    height: 100%;
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
  }

  h1 {
    ${theme("fontStyle.h3")}
  }

  h2 {
    ${theme("fontStyle.h4")}
  }

  h2 {
    ${theme("fontStyle.h5")}
  }

  h3 {
    ${theme("fontStyle.subtitle1")}
  }

  h4 {
    ${theme("fontStyle.subtitle2")}
  }

  h5 {
    ${theme("fontStyle.body1")}
  }

  p {
    ${theme("fontStyle.body2")}
  }
`;

export default GlobalStyles;
