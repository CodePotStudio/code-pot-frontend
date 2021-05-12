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
  button {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
    display: block;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
