import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from '../../Global';
import axios from 'axios';

export default class Departamentos extends Component {
    selectDepartamentos = React.createRef();

    state = {
        departamentos: [],
        idDepartamento: 0
    }

    loadDepartamentos = () => {
        axios.get(Global.urlDepartamentos).then(response => {
            this.setState({
                departamentos: response.data
            })
        })
    }

    buscarEmpleados = (e) => {
        e.preventDefault()
        let idDepartamento = this.selectDepartamentos.current.value;
        this.setState({
            idDepartamento: idDepartamento
        })

    }

    componentDidMount = () => {
        this.loadDepartamentos()
    }
    render() {
        return (
        <div>
            <h1>Departamentos</h1>
            <form>
                <select ref={this.selectDepartamentos}>
                    {
                        this.state.departamentos.map((dep, index) => {
                            return(<option key={index} value={dep.Numero}>{dep.Nombre}</option>)
                        })
                    }
                </select>
                <button onClick={this.buscarEmpleados}>Cargar Empleados</button>
            </form>
            {
                this.state.idDepartamento !== 0 &&
                (<Empleados iddepartamento={this.state.idDepartamento} />)
            }
        </div>
        )
    }
}
