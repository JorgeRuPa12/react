import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class EmpleadosOficios extends Component {
    selectOficios = React.createRef()
    state = {
        oficios: [],
        empleados: []
    }

    loadOficios = () => {
        let url = Global.urlEmpleados+"api/Empleados"
        let arrayOficios = []
        axios.get(url).then(response => {
            for (const empleado of response.data) {
                if(!arrayOficios.includes(empleado.oficio)){
                    arrayOficios.push(empleado.oficio)
                }
            }
            this.setState({
                oficios: arrayOficios
            })                  
        })
    }

    buscarEmpleado = (e) => {
        e.preventDefault()
        let oficio = this.selectOficios.current.value
        let url = Global.urlEmpleados+"api/Empleados/EmpleadosOficio/"+oficio
        axios.get(url).then(response => {
            this.setState({
                empleados: response.data
            })
        })

    }

    componentDidMount = () => {
        this.loadOficios();
    }

    render() {
        return (
        <div>
            <h1>Empleados X Oficio</h1>
            <form onSubmit={this.buscarEmpleado}>
                <select ref={this.selectOficios}>
                    <option>Selecciona</option>
                    {
                        this.state.oficios.map((oficio, index) => {
                            return(<option value={oficio} key={index}>
                                {oficio}
                            </option>
                            )
                        })
                    }
                </select>
                <button>Buscar Empleados</button>
            </form>
            <ul>
                {
                    this.state.empleados.map((empleado, index) => {
                        return(
                            <li key={index}>{empleado.apellido} - {empleado.salario}</li>
                        )
                    })
                }
            </ul>
        </div>
        )
    }
}
