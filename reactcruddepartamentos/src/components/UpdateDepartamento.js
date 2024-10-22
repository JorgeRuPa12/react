import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default class UpdateDepartamento extends Component {
    cajaId = React.createRef()
    cajaNombre = React.createRef()
    cajaLocalidad = React.createRef()

    state = {
        status: false
    }

    updateDepartamento = (e) => {
        e.preventDefault();
        let request = "api/departamentos"
        let url = Global.apiDepartamentos + request;
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let localidad = this.cajaLocalidad.current.value;
        let departamento = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }
        axios.put(url,departamento).then(response => {
            this.setState({
                status: true
            })
        })
    }


    render() {
        return (
        <div>
            {
                this.state.status &&
                (
                    <Navigate to={"/"}/>
                )
            }
            <h1>Update Departamento ➡️ {this.props.id}</h1>
            <form onSubmit={this.updateDepartamento}>
                <label>Id</label>
                <input type='text' ref={this.cajaId} defaultValue={this.props.id} className='form-control w-50' disabled/>
                <label>Nombre</label>
                <input type='text' ref={this.cajaNombre} defaultValue={this.props.nombre} className='form-control w-50'/>
                <label>Localidad</label>
                <input type='text' ref={this.cajaLocalidad} defaultValue={this.props.localidad} className='form-control w-50'/>
                <button className='btn btn-outline-success mt-1'>
                    Actualizar
                </button>
            </form>
        </div>
        )
    }
}
