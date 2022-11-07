import React from 'react';
//import './App.css';
import Serie from './components/Serie'
import TiraPeliculas from './components/TiraPeliculas'
import ContenedorPublicidad from './components/ContenedorPublicidad'

//uso MAP, FILTER o REDUCE para iterar sobre un Array o imprimir su contenido, NO FOR ni FOR EACH.

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <ContenedorPublicidad>
          <h2> Aqui están las publicidades!!!
          </h2>
        </ContenedorPublicidad>
        <Serie />
        <TiraPeliculas />
        <TiraPeliculas />
        <ContenedorPublicidad>
          <ul>
            <li>Publicidad 1</li>
            <li>Publicidad 2</li>
            <li>Publicidad 3</li>
          </ul>
        </ContenedorPublicidad>
      </main>
    </div>
  );
}

export default App;
