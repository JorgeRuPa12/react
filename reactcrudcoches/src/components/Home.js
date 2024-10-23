import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

export default class Home extends Component {

    cajaid = React.createRef()
    state = {
        coches: []
    }

    loadCoches = () => {
        let request = "api/Coches"
        let url = Global.urlCoches + request
        axios.get(url).then(response => {
            this.setState({
                coches: response.data
            })
        }) 
    }


    buscarCoche = (e) => {
        e.preventDefault()
        let id = parseInt(this.cajaid.current.value);
        let request = "api/Coches/FindCoche/" + id;
        let url = Global.urlCoches + request;
        axios.get(url).then(response => {
            this.setState({
                coches: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadCoches()
    }

    render() {
        return (
        <div>
            <form className='form-control'>
                <label>Introduzca ID</label>
                <input ref={this.cajaid} type='text' className='form-control  w-25'/>
                <button onClick={this.buscarCoche} className='btn btn-outline-warning'>
                    Buscar
                </button>
            </form>
            <table className='table table-striped mt-5'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Conductor</th>
                        <th>Imagen</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.coches &&
                        (
                            this.state.coches.map((coche, index) => {
                                return(
                                <tr key={index}>
                                    <td>{coche.idCoche}</td>
                                    <td>{coche.marca}</td>
                                    <td>{coche.modelo}</td>
                                    <td>{coche.conductor}</td>
                                    <td><img src={coche.imagen} width="128" /></td>
                                    <td><NavLink to={"/update/" + coche.idCoche + "/" + coche.marca + "/" + coche.modelo + "/" + coche.conductor + "/" + coche.imagen + "/"}
                                     className='btn btn-outline-primary'>Modificar</NavLink></td>
                                    <td><NavLink className='btn btn-outline-danger'>Borrar</NavLink></td>
                                </tr>
                                )
                                
                            })
                        )
                        
                    }
                </tbody>
            </table>
        </div>
        )
    }
}
