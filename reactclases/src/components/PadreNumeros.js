import { Component } from 'react'
import HijoNumeros from './HijoNumeros'

export class PadreNumeros extends Component {

    state = {
        numerosHijos: [],
        suma: 0
    }
    
    incrementarSuma = (numero) => {
        this.setState({
            suma: this.state.suma + numero
        })
        console.log(this.state.suma)
    }
    
    escogerNumero = () => {
        var numero = parseInt(Math.random()*10) + 1 
        this.setState((state) => ({
            numerosHijos: [...state.numerosHijos, <HijoNumeros numero={numero} key={numero} incrementarSuma={this.incrementarSuma}/>]
        }))
    }

    


    render() {
        return (
        <div>
            <h1 style={{color:"red"}}>Padre Numeros</h1>
            <h2 style={{backgroundColor:"black", color:"white", width:"50px"}}>{this.state.suma}</h2>
            <button style={{backgroundColor:"lightgreen"}} onClick={this.escogerNumero}>
                Nuevo
            </button>
            <div>{this.state.numerosHijos}</div>
        </div>
        )
    }
}

export default PadreNumeros