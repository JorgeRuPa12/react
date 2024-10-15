//Debemos importar Component para la herencia
import { Component } from "react";

//Podemos declarar metodos fuera de la clase
//dichos metodos no pueden utilizar nada
function metodoExterno(){
    console.log("Function externa de la clase")
}
class Contador extends Component {
    //Las variables y los metodos se declaran fuera del rende
    //no se utilizan palabras clave como var, let o const
    numero = 1;

    //Los metodos se declaran directamente aquí
    incrementarNumero = () => {
        //Para poder acceder a las variables de la clase
        //debemos utiliza la palabra clave this
        this.numero = this.numero + 1;
        console.log("Valor de numero: "+ this.numero)
    }
    //Vamos a declarar una variable de estado  que tendra
    //el valor de props
    state = {
        valor: parseInt(this.props.inicio)
    }

    //Creamos un metodo para cambiar el valor de state
    incrementarValorState = () => {
        //Para modificar loos elementos que tengamos dentro de state
        this.setState({
            valor: this.state.valor + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Class Contador</h1>
                <h2 style={{color:"blue"}}>
                    Inicio del contador: {this.props.inicio}
                </h2>
                <h2 style={{color:"red"}}>
                    Valor del state: {this.state.valor}
                </h2>
                <button onClick={ () => this.incrementarValorState()}>
                    Incrementar valor state
                </button>
                <button onClick={ () => {
                    //Si deseamos llamar a un metodo de la clase se utiliza la palabra this
                    this.incrementarNumero()
                    //Si deseamos llamar a un metodo externo
                }}>
                    Incrementar Número
                </button>
            </div>
        )
    }
}

export default Contador;