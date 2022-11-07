import React from 'react';

//No se puede tener Etiquetas Hermanas, cuando esto sucede, englobamos todas las etiquetas en 1 sola, ejemplo en DIV.
//el titulo de cada capitulo va a venir de las PROPS, es decir de datos que se van a enviar en el momento de generar el componente
function Capitulos(props) {
    return (
        <div>

            <h5> 
            Cartman Gets an Anal Probe
            </h5>
            <h5>
            Weight Gain 4000
            </h5>
            <h5>
            Volcano
            </h5>
            <h5>
            Big Gay Al's Big Gay Boat Ride
            </h5>
            <h5>
            An Elephant Makes Love to a Pig
            </h5>
            <h5>
            Death
            </h5>
            <h5>
            Pinkeye
            </h5>
            <h5>
            Starvin' Marvin
            </h5>
            <h5>
            Mr. Hankey, the Christmas Poo
            </h5>
            <h5>
            Damien
            </h5>
            <h5>
          {props.nombre}
            </h5>

        </div>
    );
}

export default Capitulos;