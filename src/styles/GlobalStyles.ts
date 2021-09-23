import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #6D7FB8;
    --color-primary2: #7f8fc2;
    --color-secondary: #EEF1FB;
    --color-gray: #BCB5B5;
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-transparent: trasparent;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // irá diminuir a fonte em dispositivos menores
  // se o usuário alterar as configurações de fonte
  // no dispositivo, a tela irá companhar por causa
  // das unidades em porcentagem
  html {
    @media (min-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (min-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: var(--color-secondary);
    -webkit-font-smoothing: antialiased;

    li a {
      color: var(--color-gray);
    }

  }
  // as tags input, textarea, button
  // não importam a fonte do body
  // eles possuem a própria fonte por padrão
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button { 
    cursor: pointer;
  }

  // todos os elementos que tiverem disabled
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
    color: var(--color-gray);
  }

`
