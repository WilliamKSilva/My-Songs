import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-strong: #121212;
    --background-light: #1d1d1d;
    --border: #2d2d2d;
    --primary: #3ba55d;
    --text: #D3D3D3;
    
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {         
    @media(max-width: 1080px){
      html{
        font-size: 93.75%;
      }
    }

    @media(max-width: 720px){
      html{
        font-size: 87.5%;
      }
    }

  }
  body {
    font-size: 1.6rem;
    background-color: var(--background-light);
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

  ::-webkit-scrollbar {
    height: 12px;
    width: 10px;
    background: #000;
  }

  ::-webkit-scrollbar-thumb {
      background: var(--text);
      -webkit-border-radius: 1rem;
      -webkit-box-shadow: 0px 1px 2px var(--border);
  }

  ::-webkit-scrollbar-corner {
      background: var(---background-strong);
  }
`;