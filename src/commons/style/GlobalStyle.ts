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
    color: inherit;
  }
  h1 {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 1.8;
  }
  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.8;
  }
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.8;
  }
  h4 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.8;
  }
  h5 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.8;
  }
  h6 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.8;
  }
  p {
    ${theme("fontStyle.body1")}
  }
`;

export default GlobalStyles;
