import React from 'react';


//No se puede tener Etiquetas Hermanas, cuando esto sucede, englobamos todas las etiquetas en 1 sola, ejemplo en DIV.

function ContenedorPublicidad(props) {
    return (
        <div>

            <p>----Inicio de espacio publicitario----</p>
            {props.children}
            <p>----Fin de espacio publicitario----</p>

        </div>
    );
}



export default ContenedorPublicidad;