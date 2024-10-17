import React, { Component } from 'react'
import Empleados from './Empleados'
import axios from 'axios'
import Global from '../../Global'

export default class Departamentos extends Component {
    selectDepartamentos = React.createRef()

    state = {
        departamentos: [],
        idDepartamento: 0
    }

    loadDepartamentos = () => {
        var request = "api/departamentos";
        var url = Global.urlDepartamentos+request
        axios.get(url).then(response => {
            console.log(response.data)
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    buscarEmpleados = (e) => {
        e.preventDefault()
        //Capturar el id del departamento
        let idDepartamento = this.selectDepartamentos.current.value
        this.setState({
            idDepartamento: idDepartamento
        })
    }

    render() {
        return (
        <div>
            <h1>Departamentos Component</h1>
            <form>
                <select ref={this.selectDepartamentos}>
                    <option>Selecciona</option>
                    {
                        this.state.departamentos.map((departamento, index) => {
                            return(
                                <option key={index} value={departamento.Numero}>{departamento.Nombre}</option>
                            )
                        })
                    }
                </select>
                <button onClick={this.buscarEmpleados}>Buscar Empleados</button>
            </form>
            <h2 style={{color: "blue"}}>Id departamento: {this.state.idDepartamento}</h2>
            {
                this.state.idDepartamento !== 0 &&
                (
                    <Empleados iddepartamento={this.state.idDepartamento}/>
                )
            }
        </div>
        )
    }
}