import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #edf6f9;
    --text: #212529;
    --secondary: #2d6a4f;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-widhth: 1080px) {
      font-size: 93.75%;
    }
    @media (max-widhth: 720px) {
      font-size: 87.5%;
    }
  }
  body {
     background: var(--primary);
    -webkit-font-smoothing: antialised;
  }
  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;