import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  preta: '#FFF8F2  ',
  cinza: '#780004',
  Azul: '#1D2E5C'
}
const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;  
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
    list-style-type: none;
    text-decoration:none;
  }

  body{
    background-color: ${cores.preta};
    color:${cores.branca};

  }

`

export default GlobalStyles;