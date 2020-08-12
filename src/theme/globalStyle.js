import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: 'Gotham Thin';
  }

  h1 {
    font-family: 'Gotham Ultra';
    margin: 0;
  }

  h2 {
    font-family: 'Gotham Medium';
    margin: 0;
  }

  h3 {
    font-family: 'Gotham Bold' ;
    margin: 0;
  }
`;

export default GlobalStyle;