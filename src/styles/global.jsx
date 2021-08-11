import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  //Primary
  --Pink: hsl(322, 100%, 66%);
  --LightPink: hsl(321, 100%, 78%);
  --LightRed: hsl(0, 100%, 63%);
  //Neutral
  --VeryDarkCyan: hsl(192, 100%, 9%);
  --VeryPaleBlue: hsl(207, 100%, 98%);
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
// font-size: 16px (tamanho ideal: Desktop)
html {
  @media (max-width:1000px){
    font-size: 93.75% // 15px
  }
  @media (max-width: 720px){
    font-size: 87.5%; // 14px
  }
}

//REM  = 1REM = 16px font-size
body{
  background-color: white;
  -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

p{
  font-weight: 400;
}

button{
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed
}
`;
