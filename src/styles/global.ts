import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .divAlt{
    width: 100%;
    background-color: blue;
    margin-bottom: 3rem;
    padding: 1rem;
    color: white;
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    &:hover{
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
    /* &:hover{
      background-color: blue;
    } */
  }

  :root{
    font-size: 62.5%; /* 1rem = 10px */
  }

  :focus {
    outline: none;
  }

  body {
    background-color: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  h1{
    color: ${(props) => props.theme["base-title"]};
  }

  h2,h3{
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
