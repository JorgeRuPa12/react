import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import {NavLink, Navigate} from 'react-router-dom'

export default class Home extends Component {

    cajaid = React.createRef()
    state = {
        coches: [],
        status: false
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
        if(isNaN(id))  {
            this.loadCoches()
        }else{
            let request = "api/Coches/FindCoche/" + id;
            let url = Global.urlCoches + request;
            axios.get(url).then(response => {
                this.setState({
                    coches: [response.data]
                })
            })
        }
    }

    borrarCoche = () => {
        let id = this.state.idCocheABorrar
        let request = "api/Coches/DeleteCoche/" + id;
        let url = Global.urlCoches + request
        axios.delete(url).then(response => {
            this.setState({
                status: true
            })
        })
        this.loadCoches()
    }

    empezarBorrado = (id) => {
        this.setState({
            idCocheABorrar: id
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
                                    <td><NavLink to={"/detalle/" + coche.idCoche} className="btn btn-outline-info">Detalles</NavLink></td>
                                    <td><NavLink to={"/update/" + coche.idCoche + "/" + coche.marca + "/" + coche.modelo + "/" + coche.conductor}
                                     className='btn btn-outline-primary'>Modificar</NavLink></td>
                                    <td><button className='btn btn-outline-danger' onClick={this.empezarBorrado(coche.idCoche)} data-bs-toggle="modal" data-bs-target="#exampleModal">Borrar</button></td>
                                </tr>
                                
                                )
                                
                            })
                        )
                        
                    }
                </tbody>
            </table>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Estas seguro de que quieres borrar este coche
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" onClick={this.borrarCoche} data-bs-dismiss="modal" class="btn btn-danger">Eliminar</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        
        )
    }
}
