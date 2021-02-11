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
  color: #fff;
}

a {
  text-decoration: none;
}

.loading {
  padding-top: 10rem;
}


.border {
  border: 1px solid red;
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
