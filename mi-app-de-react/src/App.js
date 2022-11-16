import React from 'react';
import './App.css';
//import Serie from './components/Serie'
//import TiraPeliculas from './components/TiraPeliculas'
//import ContenedorPublicidad from './components/ContenedorPublicidad'
//import Contador from './components/Contador'
//import Gif from './components/Gif'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Products from './components/Products'
import NotFound from './components/NotFound';
import { Route, Link, Switch } from 'react-router-dom';
import FrutasFn from './components/FrutasFn';
import RickAndMorty from './components/RickAndMorty';

//import Pelicula from './components/Pelicula';


//uso MAP, FILTER o REDUCE para iterar sobre un Array o imprimir su contenido, NO FOR ni FOR EACH.


/*
function App() {
  return (
   <div className="App">
      <header className="App-header">

      </header>
      <main>
        <Gif/>
        <ContenedorPublicidad>
          <h2> Aqui están las publicidades!!!
          </h2>
        </ContenedorPublicidad>
        <Contador inicial = {0} />
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

export default App;*/

//........COMPONENTES DEL REACT ROUTER. CREAR RUTA Y RENDERIZAR EL COMPONENTE ESPECíFICO.

// Tengo unas rutas que renderizan un componente.

function App() {
  return (


    <div >

      <Link to="/" exact="true">Home</Link>
      <br></br><br></br>
      <Link to="/contact">Contact</Link>
      <br></br><br></br>
      <Link to="/about">About</Link>
      <br></br><br></br>
      <Link to="/products">Products</Link>
      <br></br><br></br>
      <Link to="/frutas">Frutas</Link>
      <br></br><br></br>
      <Link to="/rickandmorty">Rick and Morty</Link>
      <br></br><br></br>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products/:id">
          <Products />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/frutas">
          <FrutasFn />
        </Route>
        <Route path="/rickandmorty">
          <RickAndMorty />
        </Route>
        <Route component={NotFound} />
      </Switch>

    </div>


  );
}

export default App;


//TODAS LAS FORMAS DE HACERLO...........................................//
/*  <Route path='/'>
      <Home />
    </Route>
    <Route path='/contact' component={Contact}>
    </Route>
    <Route path='/about' component={About} />
*/

//......................RUTEO............................................................//
/*
<Route exact path="/">
<Home />
</Route>
<Route path="/contact">
<Contact />
</Route>
<Route path="/about">
<About />
</Route>
<Route component={NotFound} />
*/

//How to downgrade react-router-dom version to v5.2.0

//npm install react-router-dom@5.2.0
//Se bajó a la versión 5.2.0 del REACT ROUTER DOM para este proyecto.

//https://github.com/remix-run/react-router/discussions/8753

//Route para renderizar
//Link para Single Page Application