import React from 'react';
import { useState, useEffect } from 'react'


//useEffect: se puede utilizar tantas veces como se quiera.

function RickAndMorty() {

    const [personajes, setPersonajes] = useState([])

    const [pagina, setPagina] = useState(1)


    useEffect(() => {
        console.log('%c se ha montado el componente', 'color: yellow');
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                setPersonajes(data.results)
            })
            .catch(error => console.log(error))
    }, [])


    useEffect(() => { console.log('%c se ha actualizado el componente', 'color: red'); },
        [personajes]);

    useEffect(() => {
        return () => console.log('%c se ha desmontado el componente', 'color: green');
    },
        []);


    const cargarMas = async () => {

        await setPagina(pagina + 1)
        console.log(pagina)
        console.log(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
            .then(response => response.json())
            .then(data => {
                setPersonajes(data.results)
            })
            .catch(error => console.log(error))
    }


    return (

        <div>

            <h1>COMPONENTE RICK AND MORTY- useEffect</h1>


            <ul>
                {personajes.length === 0 && <p>Cargando...</p>}
                {
                    personajes.map((personaje, i) => {
                        return <li key={i}>
                            <h3> {personaje.name}</h3>
                            <img src={personaje.image} alt='avatar' width='150' />
                        </li>
                    })
                }

                <button onClick={cargarMas}>Siguiente Página</button>
            </ul>


        </div>
    );
}

export default RickAndMorty;
