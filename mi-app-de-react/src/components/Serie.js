import React from 'react';
import Capitulos from './Capitulos'



//No se puede tener Etiquetas Hermanas, cuando esto sucede, englobamos todas las etiquetas en 1 sola, ejemplo en DIV.
function Serie() {

    let season = 'Temporada'
    let actors = ['Kyle Broflovski', 'Eric Cartman', 'Stan Marsh', 'Kenny McCormick']
    return (
        <div>

            <h2>
                {season} 1
                <Capitulos />
                <ul>
                <h5>Personajes</h5>
                {actors.map(actor => <li> {actor}</li>)}
               </ul>
            </h2>
            <h2>
                {season} 2
                <Capitulos nombre = 'Tom s Rhinoplasty'/>
                <ul>
                <h5>Personajes</h5>
                {actors.map(actor => <li> {actor}</li>)}
               </ul>
            </h2>
            <h2>
                {season} 3
                <ul>
                <h5>Personajes</h5>
                {actors.map(actor => <li> {actor}</li>)}
               </ul>
            </h2>

        </div>

    );
}

export default Serie;