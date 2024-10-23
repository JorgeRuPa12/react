import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import {Navigate} from 'react-router-dom'

export default class UpdateCoche extends Component {
    cajaId = React.createRef()
    cajaMarca = React.createRef()
    cajaModelo = React.createRef()
    cajaConductor = React.createRef()
    cajaImagen = React.createRef()

    state = {
        status: false,
        coche: [],
        contador: 0
    }

    encontrarImagen = () => {
        let request = "api/Coches/FindCoche/" + this.props.id
        let url = Global.urlCoches + request
        axios.get(url).then(response => {
            this.setState({
                coche: response.data
            })
        })
    }

    actualizarCoche = (e) => {
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

        let request = "api/Coches/UpdateCoche"
        let url = Global.urlCoches + request
        axios.put(url, coche).then(response => {
            console.log("Coche Actualizado");
            this.setState({
                status: true
            })
        })
    }

    componentDidMount = () => {
           this.encontrarImagen() 
    }

    render() {
        return (
        <div>
             <form className='form-control'>
                <label>Introduzca ID</label>
                <input type='text' className='form-control w-25' disabled ref={this.cajaId} value={this.props.id} />
                <label>Marca</label>
                <input type='text' className='form-control w-25' ref={this.cajaMarca} defaultValue={this.props.marca} />
                <label>Modelo</label>
                <input type='text' className='form-control w-25' ref={this.cajaModelo} defaultValue={this.props.modelo} />
                <label>Conductor</label>
                <input type='text' className='form-control w-25' ref={this.cajaConductor} defaultValue={this.props.conductor} />
                <label>Imagen</label>
                <input type='text' className='form-control w-50' ref={this.cajaImagen} defaultValue={this.state.coche.imagen} />
                <button onClick={this.actualizarCoche} className='btn btn-outline-success'>Actualizar</button>
            </form>
            {
                this.state.status &&
                (<Navigate to="/"/>)
            }
        </div>
        )
    }
}
