import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'

export default class Empleados extends Component {
    state = {
        empleados: []
    }

    loadEmpleados = () => {
        let idDepartamento = this.props.iddepartamento
        let url = Global.urlEmpleados+"api/Empleados/EmpleadosDepartamento/"+idDepartamento
        axios.get(url).then(response => {
            this.setState({
                empleados: response.data
            })
        })
        console.log("HOLA")
    }

    componentDidMount = () => {
        this.loadEmpleados()
    }

    // componentDidUpdate = () => {
    //     this.loadEmpleados()
    // }

    render() {
        return (
        <div>  
            <ul>
                {
                    this.state.empleados.map((empleado, index) => {
                        return(<li key={index}>{empleado.apellido} - {empleado.oficio}</li>)
                    })
                }    
            </ul> 
        </div>
        )
    }
}
