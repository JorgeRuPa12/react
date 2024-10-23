import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'

export default class Trabajadores extends Component {
    cajaIncremento = React.createRef()

    state = {
        trabajadores: [],
        status: false,
        incrementado: true
    }

    loadTrabajadores = () => {
        //Recuperar todos los id de hospital
        let idsHospitales = this.props.idhospitales
        if ( idsHospitales != 0){
            let data = ""
            for (var id of idsHospitales){
                data += "idhospital=" + id + "&"
            }
            data = data.substring(0, data.length - 1);
            this.setState({
                mensaje: data
            })
            let request = "api/trabajadores/trabajadoreshospitales?" + data
            let url = Global.urlEjemplos + request
            axios.get(url).then(response => {
                console.log("Obteniendo los trabajadores");
                this.setState({
                    trabajadores: response.data,
                    status: true
                })
            })
        }
        //Podemos realizar la peticion al servicio
        

    }

    incrementarSalario = (e) => {
        e.preventDefault()
        let incremento = parseInt(this.cajaIncremento.current.value)
        let request = "api/Trabajadores/UpdateSalarioTrabajadoresHospitales?incremento=" + incremento + "&" + this.state.mensaje;
        let url = Global.urlEjemplos + request
        console.log(url);
        
        axios.put(url).then(response => {
             this.setState({
                 incrementado: false
             })
        })
        this.loadTrabajadores()
    }

    componentDidMount = () => {
        this.loadTrabajadores()
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.idhospitales !== prevProps.idhospitales){
            this.loadTrabajadores()
        }
    }

    render() {
        return (
        <div>
            
                {
                    this.state.incrementado ?
                    (
                        <ul className='list-group w-75 ms-1 mb-2'>
                            <li className='list-group-item text-center bg-light'><b>Trabajadores</b></li>
                        {
                           this.state.trabajadores.map((trabajador ,index) => {
                                return (
                                    <li key={index} className='list-group-item text-center'>
                                        {trabajador.apellido} - ID Hospital: {trabajador.idHospital} - Salario: {trabajador.salario}€
                                    </li>
                                )
                            }) 
                        }
                        </ul>
                    ):
                    (
                        <table className='table table-light table-hover table-striped'>
                            <thead>
                                <tr className='table-info'>
                                    <th>Apellidos</th>
                                    <th>Oficio</th>
                                    <th>Salario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.trabajadores.map((trabajador ,index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{trabajador.apellido}</td>
                                                <td>{trabajador.oficio}</td>
                                                <td>{trabajador.salario}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        
                        </table>
                    )

                    
                }
            {
                this.state.status &&
                (
                <form onSubmit={this.incrementarSalario}>
                    <label>Subir el sueldo de estos trabajadores</label>
                    <input type='text' className='form-control w-25 mb-1 ms-1' ref={this.cajaIncremento} />
                    <button className='btn btn-outline-warning ms-1'>Incrementar</button>
                </form>
                )
            }
        </div>
        )
    }
}
