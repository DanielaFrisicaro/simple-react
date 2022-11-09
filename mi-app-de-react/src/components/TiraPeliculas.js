//.....................................STATELESS..............................................................//
/*import React from 'react';
import Pelicula from './Pelicula';

//No se puede tener Etiquetas Hermanas, cuando esto sucede, englobamos todas las etiquetas en 1 sola, ejemplo en DIV.
//el titulo de cada capitulo va a venir de las PROPS, es decir de datos que se van a enviar en el momento de generar el componente
function TiraPeliculas() {
    return (
        <div>

          <Pelicula genres= {['Drama', 'Comedia']}titulo= 'Especial Pandemia 1' tema = 'Covid'/>
          <Pelicula genres= {['Terror', 'Suspenso']}titulo= 'Especial Pandemia 2' tema = 'Vacunacion'/>
          
        </div>
    );
}



export default TiraPeliculas;*/

//....................................STATEFUL................................................//
import React, { Component } from 'react';
import Pelicula from './Pelicula';

class TiraPeliculas extends Component {
//defino la consecuencias, lo que quiero que suceda cuando suceden los eventos. Luego hay que asociarlos (en el JSX) a lugares concretos del HTML, en el lugar donde quiero que suceda el Evento lo coloco.
  lanzarAlerta() {
    alert('Clickeando')
  }

  cambiarAmarillo() {
document.querySelector('body').style.backgroundColor = 'Yellow'
  }

  cambiarRosa() {
    document.querySelector('body').style.backgroundColor = 'Pink'
  }

//this.lanzarAlerta y el resto de ejemplos no los invoco como función, sino se ejecutarían YA, los coloco sin parentesis, para que se ejecuten en el momento indicado en Evento.
  render() {
    return (
      <div onClick={this.lanzarAlerta} onMouseOver= {this.cambiarAmarillo} onMouseOut={this.cambiarRosa} >

        <Pelicula genres={['Drama', 'Comedia']} titulo='Especial Pandemia 1' tema='Covid' />
        <Pelicula genres={['Terror', 'Suspenso']} titulo='Especial Pandemia 2' tema='Vacunacion' />

      </div>
    );
  }
}




export default TiraPeliculas;