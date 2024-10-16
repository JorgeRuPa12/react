import React, { Component, useEffect } from 'react'

export default class TablaMultiplicarV2 extends Component {
    selectNumero = React.createRef()

    state = {
        cadenaResultados: [],
        cadenaOperaciones: [],
        numerosOption: []
    }

    obtenerNumeros = () => {
        var arrayNumerosAleatorios = []
        for (let i = 1; i < 5; i++) {
            let numeroAleatorio = parseInt(Math.random()*100)
            arrayNumerosAleatorios.push(numeroAleatorio)
            arrayNumerosAleatorios.push(<option key={i} value={numeroAleatorio}>
                    {numeroAleatorio}
                </option>);
        }
        return arrayNumerosAleatorios
    }

    tablamultiplicar = (e) => {
        e.preventDefault()
        let numero = parseInt(this.selectNumero.current.value)
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

    render() {
        
        return (
        <div>
            <h1>Tabla Multiplicar</h1>
            <form onSubmit={this.tablamultiplicar}>
                <label>Introduzca numero: </label>
                <select ref={this.selectNumero}>
                    {this.obtenerNumeros()}
                </select>

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
