import { createGlobalStyle } from "styled-components";
import color from "./_color";

const creatTitleStyle = () => {
  let styles = "";
  for (let i = 1; i < 6; i++) {
    styles += `
      h${i} {
        font-weight: normal;
      }
    `;
  }
  return styles;
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "YakuHanJP";
    src: url("https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/fonts/YakuHanJP/YakuHanJP-Regular.eot");
    src: url("https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/fonts/YakuHanJP/YakuHanJP-Regular.woff2")
        format("woff2"),
      url("https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/fonts/YakuHanJP/YakuHanJP-Regular.woff")
        format("woff");
  }
  * {
    box-sizing: border-box;
  }
  html {
    overflow-wrap: break-word;
    word-wrap: break-word;
    color: ${color.TEXT.main};
  }
  body {
    font-family: "YakuHanJP", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", Arial, "ＭＳ Ｐゴシック", "MS PGothic" !important;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: ${color.PRIMARY.main};
  }
  ${creatTitleStyle()}
`;

export default GlobalStyle;
