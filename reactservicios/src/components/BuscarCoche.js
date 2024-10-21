import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class BuscarCoche extends Component {
    urlCoche = Global.urlCoches
    cajaMarca = React.createRef()
    state = {
        coches: []
    }
    
    componentDidMount = () => {
        let request = "/webresources/coches"
        
        axios.get(this.urlCoche+request).then(response => {
            this.setState({
                coches: response.data
            })
        })
    }

    buscarCoche = (e) => {
        e.preventDefault()
        let request = "/webresources/coches"
        let marca = this.cajaMarca.current.value
        let arrayMarca = []
        // let coches = this.state.coches.filter(coche => coche.marca.includes(marca))
        // this.setState({
        //     coches: coches
        // })
        axios.get(this.urlCoche+request).then(response => {
            if(marca === ""){
                this.setState({
                    coches: response.data
                })
                return
            }
             
             for (let i = 0; i < response.data.length; i++) {   
                 if(marca.toLowerCase() === response.data[i].marca.toLowerCase()){
                     arrayMarca.push(response.data[i])
                     this.setState({
                         coches: arrayMarca
                     })
                 }
             }
            })
    }

    render() {
        return (
        <div>
            <h1>Buscador coches</h1>
            <form onSubmit={this.buscarCoche}>
                <label>Introduzca marca</label>
                <input type='text' ref={this.cajaMarca}/>
                <button>Buscar Coches</button>
            </form>
            {
                this.state.coches &&
                (
                    <table class="table">
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
                                        <td><img style={{width:"150px", height:"150px"}}
                                         src={coche.imagen}></img></td>
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
