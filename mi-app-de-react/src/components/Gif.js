import React, { Component } from 'react';



//STATEFUL


class Gif extends Component {


    constructor(props) {
        super(props);
        this.state = {
            gif: ''
        }
    }


    //siempre primero se renderiza y después se ejecuta alguno de estos métodos del cliclo de vida de los Componentes
    //Puedo controlar atraves de eventos de React la posibilidad de atrapar los momentos especificos del Componente y definir la lógica asociada.

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    traerGifNuevo() {
        this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=tZKayqts1Wfw96LDt5XVXfjplo6vsC79&tag=&rating=g', this.mostrarGif)
    }

    componentDidMount() {
        console.log('Se ha montado')
        this.traerGifNuevo()
    }

    //mostrarGif como va a usar setState necesito que sea una Arrow Function que va a recibir datos
    //cuando se utiliza un método que utilza setState se necesita una Arrow Function
    mostrarGif = (data) => {
        console.log(data)
        this.setState(
            {
                gif: data.data.images.original.url
            }
        )
    }


    componentDidUpdate() {
        console.log('Se ha actualizado')
        alert('Gif nuevo')
    }


    render() {
        console.log('Se está renderizando')//REACT interpreta que en el momento en que actualizo un Estado, el render se debe volver a ejecutar.

        let contenido;

        if (this.state.gif === '') {
            contenido = <p>Cargando...</p>
        } else {
            contenido = <img src={this.state.gif} alt= 'gif' ></img>
        }

        return (


            //hay que definir (obligación) una función anómina y ejectutar la función y no simplemente asociarla.
            <div>
                {contenido}
                <button onClick={() => this.traerGifNuevo()}>Random Gif</button>
            </div>
        );
    }


}



export default Gif;