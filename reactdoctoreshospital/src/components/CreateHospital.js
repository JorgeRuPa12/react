import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default class CreateHospital extends Component {
    cajaId = React.createRef()
    cajaNombre = React.createRef()
    cajaDireccion = React.createRef()
    cajaTelefono = React.createRef()
    cajaCamas = React.createRef()

    insertHospital = (e) => {
        e.preventDefault()
        let request = "webresources/hospitales/post";
        let url = Global.apiHospitales + request;
        //Debemos respetar los tipos de dato del servicio
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let direccion = this.cajaDireccion.current.value
        let telefono = this.cajaTelefono.current.value
        let camas = parseInt(this.cajaCamas.current.value)
        //Necesitamos un objeto react con el mismo nombre
        //de propiedades que el servicio
        let hospital = {
            idhospital: id,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            camas: camas
        }
        axios.post(url, hospital).then(response => {
            this.setState({
                mensaje: "Hospital insertado: " + nombre,
                status: true
            })
        })
        
    }

    state = {
        mensaje: "",
        status: false
    }

    render() {
        return (
        <div>
            {
                this.state.status == true &&
                (<Navigate to="/hospitales"/>)
            }
            <h1>New Hospital</h1>
            <h3 style={{color:"blue"}}>{this.state.mensaje}</h3>
            <form>
                <div className='row'>
                <div className='col-6'>
                    <label>Id Hospital:</label>
                    <input type='text' ref={this.cajaId} className='form-control'/>
                    <label>Nombre:</label>
                    <input type='text' ref={this.cajaNombre} className='form-control'/>
                    <label>Direccion:</label>
                    <input type='text' ref={this.cajaDireccion} className='form-control'/>
                </div>
                <div className='col-6'>
                    <label>Telefono:</label>
                    <input type='text' ref={this.cajaTelefono} className='form-control'/>
                    <label>Camas:</label>
                    <input type='text' ref={this.cajaCamas} className='form-control'/>
                    <button onClick={this.insertHospital} className='btn btn-warning mt-3'>
                        Insert
                    </button> 
                </div>
                </div>
                
            </form>
        </div>
        )
    }
}
