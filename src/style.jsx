import { createGlobalStyle } from "styled-components";
export const cores = {
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
    overflow-x: hidden;
  }
  body{
    background-color: ${cores.bg};
  }

  .container{
    max-width: 1024px;
    margin: 0 auto;

    @media (max-width: 1024px){
      max-width: 95%;
    }
  }
`;
