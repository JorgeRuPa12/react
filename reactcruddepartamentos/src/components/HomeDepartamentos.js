import React, { Component } from 'react'
import laodingImage from './../assets/images/loading-gif.gif'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class HomeDepartamentos extends Component {
    state = {
        status: false,
        departamentos: []
    }

    loadDepartamentos = () => {
        let request = "api/departamentos";
        let url = Global.apiDepartamentos + request
        axios.get(url).then(response => {
            console.log("Leyendo departamentos");
            this.setState({
                departamentos: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos()
    }

    render() {
        if(!this.state.status){
            return (<img width="40" src={laodingImage}/>)
        }else{
           return (
            <div>
                <h1>Home</h1>
                <table className='table table-light table-hover table-striped'>
                    <thead>
                        <tr>
                            <th>Id Departamento</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.departamentos.map((departamento, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{departamento.numero}</td>
                                        <td>{departamento.nombre}</td>
                                        <td>{departamento.localidad}</td>
                                        <td>
                                            <NavLink to={'/detalles/' + departamento.numero}>
                                                Detalles
                                            </NavLink>
                                        </td>
                                        <td><NavLink to={"/update/"+departamento.numero+
                                            "/"+departamento.nombre+
                                            "/"+departamento.localidad}
                                             className='btn btn-outline-success'>
                                                Modificar
                                            </NavLink></td>
                                        <td><NavLink to={"/delete/" + departamento.numero} className='btn btn-outline-danger'>Eliminar</NavLink></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            ) 
        }

        
    }
}
