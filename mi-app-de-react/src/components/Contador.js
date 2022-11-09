import React, { Component } from 'react';

import './Contador.css'


//STATEFUL


class Contador extends Component {


    constructor(props) {
        super(props);
        this.state = {
            numero: props.inicial
        }
    }
    incrementar() {
        this.setState({ numero: this.state.numero + 1 })
    }

    decrementar() {
        this.setState({ numero: this.state.numero - 1 })
    }

    //siempre primero se renderiza y después se ejecuta alguno de estos métodos del cliclo de vida de los Componentes
    //Puedo controlar atraves de eventos de React la posibilidad de atrapar los momentos especificos del Componente y definir la lógica asociada.

    componentDidMount() {
        console.log('Se ha montado')
    }

    componentDidUpdate() {
        console.log('Se ha actualizado')
    }


    render() {
        console.log('Se está renderizando')//REACT interpreta que en el momento en que actualizo un Estado, el render se debe volver a ejecutar.
        return (/*
            <div>
                <h1>
                    Soy el número {this.props.inicial}
                </h1>
            </div>*/

//hay que definir (obligación) una función anómina y ejectutar la función y no simplemente asociarla.
            <div>
                <h1>
                    Soy el número {this.state.numero}
                </h1>
                <button onClick={()=>this.incrementar()}>Incrementar</button>
                <button onClick={()=>this.decrementar()}>Decrementar</button>
            </div>
        );
    }


}

//los children se imprimen en el mismo orden en el que se enviaron
//cuando no sabemos que va a tener el componente, usamos los children.


export default Contador;