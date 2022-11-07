import React from 'react';
import  PropTypes from 'prop-types'
import './Pelicula.css'

//No se puede tener Etiquetas Hermanas, cuando esto sucede, englobamos todas las etiquetas en 1 sola, ejemplo en DIV.
//el titulo de cada capitulo va a venir de las PROPS, es decir de datos que se van a enviar en el momento de generar el componente

//PROPS
//PROPTYPES ES EL TIPO DE DATO DE LA PROPS
function Pelicula(props) {
  //  let genres = ['Drama', 'Terror', 'Suspenso', 'Comedia']
    
  let listadoDeGeneros;
  
  if(props.genres != null){
    listadoDeGeneros = 
    <ul>
    {props.genres.map((genre, i) => <li key= {genre + i}> {genre}</li>)}
    </ul>
  }
  else {
    listadoDeGeneros = '';
  }
  
  
  return (
        <div>
            <h5>{props.titulo}</h5>
            <h5>{props.tema}</h5>
            {listadoDeGeneros}
        </div>
    );
}

//los children se imprimen en el mismo orden en el que se enviaron
//cuando no sabemos que va a tener el componente, usamos los children.
Pelicula.defaultProps = {
    titulo: 'Esta pelicula aun no tiene titulo',
    genres: null
}

Pelicula.propTypes={
    titulo: PropTypes.string,
    genres: PropTypes.string,
    tema: PropTypes.string
}

export default Pelicula;