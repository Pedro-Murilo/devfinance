import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
  font-size: 93.75%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #222;
}

a {
  text-decoration: none;
}

@media (min-width: 800px) {
  html {
    font-size: 87.5%;
  }
  #balance {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
`;
