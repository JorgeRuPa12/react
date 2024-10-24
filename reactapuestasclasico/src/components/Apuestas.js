import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class Apuestas extends Component {
    cajaUsuario = React.createRef()
    cajaResultado = React.createRef()
    cajaFecha = React.createRef()
    
    state = {
        apuestas: []
    }

    laodApuestas = () => {
        let request = "api/Apuestas";
        let url = Global.urlEjemplos + request;
        axios.get(url).then(response => {
            this.setState({
                apuestas: response.data
            })
        })
    }

    crearApuesta = (e) => {
        e.preventDefault()
        let apuesta = {
            id: 1,
            usuario: this.cajaUsuario.current.value,
            resultado: this.cajaResultado.current.value,
            fecha: this.cajaFecha.current.value
        }
        let request = "api/Apuestas"
        let url = Global.urlEjemplos + request
        axios.post(url, apuesta).then(response => {
            this.laodApuestas()
        })
        
    }

    componentDidMount = () => {
        this.laodApuestas()
    }

    render() {
        return (
        <div>
            <div>
                <button type="button" className="btn btn-outline-dark ms-3 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Crear Apuesta
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Crea tu Apuesta</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label>Introduce tu usuario</label>
                                <input type='text' className='form-control' required ref={this.cajaUsuario}/>
                                <label>Resultado</label>
                                <input type='text' className='form-control' ref={this.cajaResultado}/>
                                <label>Fecha</label>
                                <input type='date' className='form-control' ref={this.cajaFecha}/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={this.crearApuesta} className="btn btn-primary"  data-bs-dismiss="modal">Crear</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                {
                    this.state.apuestas.map((apuesta, index) => {
                        return(
                            <div key={index} className="card m-2 text-center" style={{width: "18rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title"><b>{apuesta.usuario}</b></h5>
                                    <p className="card-text bg-success text-light"><b>{apuesta.resultado}</b> - {apuesta.fecha}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        )
    }
}
