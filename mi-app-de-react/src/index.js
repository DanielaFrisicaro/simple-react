//LOS IMPORT SON COMO EL REQUIRE 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//se traen los componentes en Index.js, por medio de la desestructuración
import { BrowserRouter } from 'react-router-dom';
//BrowserRoter: anida toda la aplicación, en este caso APP
//Link: enlace para ir a cualquier lugar
//Route: permite definir cual es el componente que quiero renderizar dependiendo de la ruta
//Switch: elemento que permite definir cual es el componente que quiero renderizar dependiendo de la ruta de manera mas dinámica

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
  
 <BrowserRouter>
 <App />
 </BrowserRouter>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
