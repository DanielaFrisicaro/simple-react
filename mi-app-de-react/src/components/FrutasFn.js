import React from 'react';
import {useState} from 'react'

//El hook useState se comporta de la misma manera que el this.setState y el this.state.
//Debo definir el valor inicial del Estado.
function FrutasFn() {
    const [listadoDeFrutas, setListadoDeFrutas] = useState(['Ananá', 'Pera', 'Frutilla', 'Uva'])
    console.log(listadoDeFrutas)//la función hook UseState devuelve un Array que tiene 2 elementos, el indice 0 y 1.
    
    
    const agregarFruta= e =>{
        e.preventDefault();
        let nuevaFruta = e.target.nuevaFruta.value;
        setListadoDeFrutas([
            ...listadoDeFrutas, nuevaFruta
        ])
        e.target.nuevaFruta.value ='';
    }
    
    
    
    return (
        <div>

            <h1>COMPONENTE FRUTAS FUNCIÓN- UseState</h1>
            <p><b>Listado de Frutas </b></p>
<ul>
    {
        listadoDeFrutas.map((fruta, i)=>{
            return <li key={i}>{fruta}</li>
        })
    }
</ul>
<form onSubmit={agregarFruta}>
    <input name='nuevaFruta' type='text'/><br/><br/>
    <button>Añadir nueva Fruta</button>
</form>

        </div>
    );
}

export default FrutasFn;