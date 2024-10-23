import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import {Navigate} from 'react-router-dom'

export default class CreateCoche extends Component {
    cajaId = React.createRef()
    cajaMarca = React.createRef()
    cajaModelo = React.createRef()
    cajaConductor = React.createRef()
    cajaImagen = React.createRef()

    state = {
        status: false
    }

    crearCoche = (e) => {
        e.preventDefault()
        let id = parseInt(this.cajaId.current.value)
        let marca = this.cajaMarca.current.value
        let modelo = this.cajaModelo.current.value
        let conductor = this.cajaConductor.current.value
        let imagen = this.cajaImagen.current.value
        let coche = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        let request = "api/Coches/InsertCoche"
        let url = Global.urlCoches + request
        axios.post(url, coche).then(response => {
            console.log("Coche Creado");
            this.setState({
                status: true
            })
        })
    }

    render() {
        return (
        <div>
            <form className='form-control'>
                <label>Introduzca ID</label>
                <input type='text' className='form-control w-25' ref={this.cajaId} />
                <label>Marca</label>
                <input type='text' className='form-control w-25' ref={this.cajaMarca} />
                <label>Modelo</label>
                <input type='text' className='form-control w-25' ref={this.cajaModelo} />
                <label>Conductor</label>
                <input type='text' className='form-control w-25' ref={this.cajaConductor} />
                <label>Imagen</label>
                <input type='text' className='form-control w-50' ref={this.cajaImagen} />
                <button onClick={this.crearCoche} className='btn btn-outline-success'>Crear</button>
            </form>
            {
                this.state.status &&
                (<Navigate to="/"/>)
            }
        </div>
        )
    }
}
