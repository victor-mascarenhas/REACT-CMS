import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import GlobalStyle from '../src/assets/styles/globalStyle'
import 'sweetalert2/src/sweetalert2.scss'



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />    
    <Router/>    
  </React.StrictMode>,
  document.getElementById('root')
);

