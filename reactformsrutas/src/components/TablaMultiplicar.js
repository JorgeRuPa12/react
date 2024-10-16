import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajaNumero = React.createRef()
    state = {
        cadenaResultados: [],
        cadenaOperaciones: []
    }

    tablamultiplicar = (e) => {
        e.preventDefault()
        let numero = parseInt(this.cajaNumero.current.value)
        let cadenaResultados = []
        let cadenaOperaciones = []


        for (let i = 1; i < 11; i++) {
            let operacion = numero+"*"+i
            let resultado = parseInt(numero*i)
            cadenaResultados.push(resultado)
            cadenaOperaciones.push(operacion)

            this.setState({
                cadenaResultados: cadenaResultados,
                cadenaOperaciones: cadenaOperaciones
            })
        }
    }

    verState = () => {
        console.log(this.state.cadenaResultados)
    }

    render() {
        return (
        <div>
            <h1>Tabla Multiplicar</h1>
            <form onSubmit={this.tablamultiplicar}>
                <label>Introduzca numero: </label>
                <input type='text' ref={this.cajaNumero}/>
                <button>Enviar Datos</button>
            </form>
                {
                    this.state.cadenaResultados &&
                    (
                    <table>
                        <thead>
                            <tr>
                                <th>Operacion</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                           this.state.cadenaResultados.map((resultado, index) => {
                            return(
                                    <tr key={index}>
                                        <td>{this.state.cadenaOperaciones[index]}</td>
                                        <td>{resultado}</td>
                                    </tr>
                            )

                            }) 
                        }
                        </tbody>
                    </table>
                    )
                }
            
        </div>
        )
    }
}
