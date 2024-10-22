import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default class CreateDepartamentos extends Component {
    cajaid = React.createRef()
    cajanombre = React.createRef()
    cajalocalidad = React.createRef()

    state = {
        status: false
    }

    insertarDepartamento = (e) => {
        e.preventDefault()
        let id = parseInt(this.cajaid.current.value)
        let nombre = this.cajanombre.current.value
        let localidad = this.cajalocalidad.current.value
        let request = "api/departamentos"
        let url = Global.apiDepartamentos + request
        let departamento = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }
        axios.post(url, departamento).then(response => {
            console.log("Insertado");
            this.setState({
                status: true
            })
        })
    }

    render() {
        if(this.state.status){
            return(<Navigate to="/"/>)
        }else{
           return (
            <div>
                <h1>Create Departamento</h1>
                <form>
                    <label>Id Departamento</label>
                    <input type='text' ref={this.cajaid} className='form-control w-25'/>
                    <label>Nombre</label>
                    <input type='text' ref={this.cajanombre} className='form-control w-50'/>
                    <label>Localidad</label>
                    <input type='text' ref={this.cajalocalidad} className='form-control w-25'/>
                    <button className='btn btn-outline-success mt-1' onClick={this.insertarDepartamento}>
                        Insertar
                    </button>
                </form>
            </div>
            ) 
        }
        
    }
}
