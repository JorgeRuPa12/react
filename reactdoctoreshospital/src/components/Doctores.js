import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import DoctorDetalle from './DoctorDetalle'

export default class Doctores extends Component {

    state = {
        doctores: [],
        doctorSeleccionado: null
    }

    mostrarDoctores = () => {
        var idhospital = this.props.idhospital
        var request = "api/Doctores/DoctoresHospital/" + idhospital
        var url = Global.apiDoctores + request
        axios.get(url).then(response => {
            this.setState({
                doctores: response.data
            })
        })
    }

    seleccionarDoctor = (idDoctor) => {
        this.setState({
            doctorSeleccionado: idDoctor
        })
    }

    componentDidMount = () => {
        this.mostrarDoctores()
    }

    componentDidUpdate = (prevProps) => {
        //Nunca llamaremos a nada si no tenemos aqui un if
        if(this.props.idhospital !== prevProps.idhospital){
            this.mostrarDoctores()
        }
    }

    render() {
        return (
        <div>
            <h2>Doctores del hospital:
                {this.props.idhospital}
            </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Apellido</th>
                        <th>Especialidad</th>
                        <th>Salario</th>
                        <th>Id Hospital</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.doctores.map((doctor, index) => {
                            return(
                                <tr key={index}>
                                    <td>{doctor.apellido}</td>
                                    <td>{doctor.especialidad}</td>
                                    <td>{doctor.salario}</td>
                                    <td>{doctor.idHospital}</td>
                                    <td><button className='btn btn-primary'
                                        onClick={ () => this.seleccionarDoctor(doctor.idDoctor)}>
                                            Detalles
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                this.state.doctorSeleccionado &&
                (<DoctorDetalle idDoctor={this.state.doctorSeleccionado}/>)
            }
        </div>
        )
    }
}
