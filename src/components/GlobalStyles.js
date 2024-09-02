import { createGlobalStyle } from 'styled-components';
import theme from '../styles/theme';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #121212;
    color: white;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
