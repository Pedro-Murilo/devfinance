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
  background: #1a1a1a;
}

a {
  text-decoration: none;
}

.loading {
  padding-top: 10rem;
}

.transaction {
  display: block;
  width: 100%;
  overflow-x: auto;
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
