import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Bazier Square, Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    font-weight: 400;
  }
  body {
    height: 100%;
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyles;
