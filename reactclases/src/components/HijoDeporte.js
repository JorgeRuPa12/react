import { Component } from 'react'

export class HijoDeporte extends Component {
    seleccionarFavorito = () => {
        var deporte = this.props.deporte;
        //realizamos la llamada padre enviando el deporte
        this.props.mostrarFavorito(deporte);
    }

    render() {
        return (
            <div>
                <h2 style={{color:"blue"}}>{this.props.deporte}</h2>
                <button onClick={this.seleccionarFavorito}>Seleccionar Favorito</button>
            </div>
        )
    }
}

export default HijoDeporte