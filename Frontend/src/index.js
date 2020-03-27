import React from 'react';
import ReactDOM from 'react-dom'; //Integração do react com a DOM (arvore de elementos)
import App from './App';

//Renderiza o App dentro div com o Id root, ela esta na index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);