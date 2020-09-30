import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import GlobalStyle from '../src/assets/styles/globalStyle'



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />    
    <Router/>    
  </React.StrictMode>,
  document.getElementById('root')
);

