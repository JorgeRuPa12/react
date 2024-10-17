import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class BuscarEmpleadosDepartamento extends Component {
    urlEmpleados = Global.urlEmpleados;
    selectDepartamento = React.createRef()

    state = {
        empleados: [],
        departamentos: []
    }

    buscarEmpleados = (e) => {
        e.preventDefault();
        let numeroDepartamento = this.selectDepartamento.current.value
        console.log(numeroDepartamento)
        let request = "api/Empleados/EmpleadosDepartamento/"+numeroDepartamento
        axios.get(this.urlEmpleados+request).then(response => {
            this.setState({
                empleados: response.data
            })
        })
    }

    loadDepartamentos = () => {
        let request = "api/departamentos"
        axios.get(Global.urlDepartamentos+request).then(response => {
            this.setState({
                departamentos: response.data
            })
        })
    }
    
    componentDidMount = () => {
        this.loadDepartamentos();
    }

    render() {
        return (
        <div>
            <h1>Buscar Empleados X Departamento</h1>
            <form>
                <select ref={this.selectDepartamento}>
                    {
                        this.state.departamentos.map((departamento, index) => {
                            return(
                               <option key={index} value={departamento.Numero}>
                                    {departamento.Nombre}
                                </option> 
                            )
                            
                        })
                    }
                </select>
                <button onClick={this.buscarEmpleados}>
                    Buscar Empleados
                </button>
            </form>
            <ul>
                {
                    this.state.empleados.map((empleado, index) => {
                        return(
                            <li key={index}>{empleado.apellido} - {empleado.oficio}</li>
                        )
                    })
                }
            </ul>
        </div>
        )
    }
}
