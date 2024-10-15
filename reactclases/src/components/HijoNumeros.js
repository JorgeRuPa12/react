import { Component } from 'react'

export class HijoNumeros extends Component {
    sumar = () => {
        var numero = parseInt(this.props.numero)
        this.props.incrementarSuma(numero)
    }

    render() {
        return (
            <div>
                <h2>Hijo Numero: {this.props.numero}</h2>
                <button onClick={this.sumar}>Sumar {this.props.numero}</button>
            </div>
                
        )
    }
}

export default HijoNumeros