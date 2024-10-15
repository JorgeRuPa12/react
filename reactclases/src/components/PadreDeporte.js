import React, { Component } from 'react'
import HijoDeporte from './HijoDeporte'

export class PadreDeporte extends Component {
    deportes = ["Furbo", "Baket", "Tenis", "Petanca", "Curlign"]

    mostrarFavorito = (deporteSeleccionado) => {
        this.setState({
            favorito: deporteSeleccionado
        })
    }

    state = {
        favorito: ""
    }

    //Creamos una variable en el state para mostrar el deporte seleccionado
    render() {
        return (
        <div>
            <h1 style={{color:"red"}}>Padre Deporte</h1>
            <h4 style={{backgroundColor:"yellow"}}>
                Su deporte favorito es: {this.state.favorito}
            </h4>
            {
                //Recorremos todos los deportes y dibujamos etiquetas
                //Hijo por cada uno
                this.deportes.map((deporte, index) => {
                    return (<HijoDeporte key={index} deporte={deporte} 
                    mostrarFavorito={this.mostrarFavorito}/>)

                })
            }
        </div>
        )
    }
}

export default PadreDeporte