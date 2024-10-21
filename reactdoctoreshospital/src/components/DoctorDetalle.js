import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DoctorDetalle extends Component {

    state = {
        doctor: null
    }

    mostrarDetalle = () => {
        var idDoctor = this.props.idDoctor
        var request = "api/Doctores/" + idDoctor
        var url = Global.apiDoctores + request
        axios.get(url).then(response => {
            this.setState({
                doctor: response.data
            })
            console.log(response.data)
        })
        
    }

    componentDidMount = () => {
        this.mostrarDetalle()
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.idDoctor !== prevProps.idDoctor){
            this.mostrarDetalle()
        }
    }

    render() {
        return (
        <div>
            {
                this.state.doctor &&
                (
                    <div>
                        <ul className='list-group'>
                            <li className='list-group-item active'>{this.state.doctor.apellido}</li>
                            <li className='list-group-item'>{this.state.doctor.idHospital}</li>
                            <li className='list-group-item'>{this.state.doctor.especialidad}</li>
                            <li className='list-group-item'>{this.state.doctor.salario}</li>
                        </ul>
                        
                    </div>
                    
                )
            }
        </div>
        )
    }
}
