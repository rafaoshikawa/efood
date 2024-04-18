import { createGlobalStyle } from "styled-components";

const cores = {
  bg: "#fff8f2",
  fontColor: "#E66767",
  cardColor: "#FFFFFF",
  footer: "¨#FFEBD9",
};

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serife;
    text-decoration: none;
    list-style: none;
  }
  body{
    background-color: ${cores.bg};
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;


