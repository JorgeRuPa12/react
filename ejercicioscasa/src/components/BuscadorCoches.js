import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class BuscadorCoches extends Component {
    cajaMarca = React.createRef()

    state = {
        coches: []
    }

    loadCoches = () => {
        let url = Global.urlCoches+"webresources/coches"
        axios.get(url).then(response => {
            this.setState({
                coches: response.data
            })
        })
    }

    filtroMarca = (e) => {
        e.preventDefault();
        let marca = this.cajaMarca.current.value;
        let coches = this.state.coches.filter(car => car.marca.toUpperCase().includes(marca.toUpperCase()))
        this.setState({
            coches: coches
        })
    }

    componentDidMount = () => {
        this.loadCoches();
    }

    render() {
        return (
        <div>
            <h1>Buscador Coches</h1>
            <form onSubmit={this.filtroMarca}>
                <label>Introduzca marca: </label>
                <input type="text" ref={this.cajaMarca} />
                <button>Buscar Coches</button>
            </form>
            <table border="1px">
                <thead>
                    <tr>
                       <th>Coche</th>
                        <th>Conductor</th>
                        <th>Imagen</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.coches.map((coche, index) => {
                            return(
                                <tr key={index}>
                                    <td>{coche.modelo}</td>
                                    <td>{coche.conductor}</td>
                                    <td><img style={{width:"150px", height:"150px"}} src={coche.imagen}/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        )
    }
}
