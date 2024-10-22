import React, { Component } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'
import loadingImage from './../assets/images/loading-gif.gif'

export default class DetalleDepartamento extends Component {
    state = {
        departamento: []
    }

    findDepartamento = () => {
        let id = this.props.id
        let request = "api/departamentos/" + id
        let url = Global.apiDepartamentos + request
        axios.get(url).then(response => {
            console.log("Detalles Departamento");
            console.log(response.data);
            
            this.setState({
                departamento: response.data
            })
        })
    }

    componentDidMount = () => {
        this.findDepartamento()
    }

    render() {
        return (
        <div>
            <h1>Detalles Departamento: {this.props.id}</h1>
            {
                this.state.departamento ?
                (
                    <ul className='list-group'>
                        <li className='list-group-item w-50'><b>Numero: </b>{this.state.departamento.numero}</li>
                        <li className='list-group-item w-50'><b>Nombre: </b>{this.state.departamento.nombre}</li>
                        <li className='list-group-item w-50'><b>Localidad: </b>{this.state.departamento.localidad}</li>
                    </ul>
                ):
                (<img src={loadingImage} />)
            }
        </div>
        )
    }
}
