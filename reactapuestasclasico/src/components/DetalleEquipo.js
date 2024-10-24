import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class DetalleEquipo extends Component {
    state = {
        equipo: []
    }

    buscarEquipo = () => {
        let request = "api/Equipos/"+this.props.id;
        let url = Global.urlEjemplos + request;
        axios.get(url).then(response => {
            this.setState({
                equipo: response.data
            })
        })
    }

    componentDidMount = () => {
        this.buscarEquipo()
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.id !== prevProps.id){
            this.buscarEquipo()
        }
        
    }

    render() {
        return (
        <div>
            <ul className='list-group w-25 mt-3 mx-auto'>
                <li className='list-group-item'>{this.state.equipo.nombre}</li>
                <li className='list-group-item'><b>Champions:</b> {this.state.equipo.champions}</li>
                <li className='list-group-item'>{this.state.equipo.nombre}</li>
                <li className='list-group-item'><a href={this.state.equipo.web}>Web</a></li>
                <li className='list-group-item'>{this.state.equipo.descripcion}</li>
                <li className='list-group-item'><b>Finales:</b> {this.state.equipo.finalista}</li>
                <li className='list-group-item text-center'><img src={this.state.equipo.imagen} width="128"/></li>
            </ul>
        </div>
        )
    }
}
