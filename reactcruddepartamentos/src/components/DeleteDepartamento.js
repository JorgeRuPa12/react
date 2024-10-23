import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Global from '../Global';
import axios from 'axios';
import HomeDepartamentos from './HomeDepartamentos.js' 

export default class DeleteDepartamento extends Component {
    state = {
        status: false
    }

    confirmarEliminacion = () => {
        let request = "api/departamentos/" + this.props.id
        let url = Global.apiDepartamentos + request
        axios.delete(url).then(response => {
            this.setState({
                status: true
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.status == false &&
                    (
                        <div>
                        <button type="button" className="btn btn-danger mt-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Confirmar Eliminacion
                        </button>
                        <div className='modal fade' id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Estas seguro que quieres eliminar el objeto con el id: <b>{this.props.id}</b>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-danger" onClick={this.confirmarEliminacion}>Eliminar</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    )
                }
                {
                    this.state.status &&
                    (<Navigate to='/'/>)
                }
            </div>
        )
    }
}
