import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css' ;

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background-color: beige;
  }
`;