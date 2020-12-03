import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    -webkit-font-smoothing: antialiased; 
       
}

body {
    background-color: #541E35;
   
    //background-repeat: no-repeat;
    //background-position: fixed;
    //background-size: cover;
}
`


export default GlobalStyle