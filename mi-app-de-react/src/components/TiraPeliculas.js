import React from 'react';
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



export default TiraPeliculas;