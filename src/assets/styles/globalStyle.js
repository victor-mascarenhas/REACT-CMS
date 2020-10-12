import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import imageBg from '../images/bigstock-Tacos-on-a-platter-with-tortil-30512531.jpg'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    -webkit-font-smoothing: antialiased; 
       
}

body {
    background-image: url(${imageBg});
    background-repeat: no-repeat;
    background-position: fixed;
    background-size: cover;
}
`


export default GlobalStyle