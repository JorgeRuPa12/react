import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import axios from 'axios';
import Global from '../../Global';

export default class HospitalesMultiples extends Component {
    selectHospitales = React.createRef();

    state = {
        hospitales: [],
        hospitalesSeleccionados: []
    }

    loadHospitales = () => {
        let request = "api/Hospitales"
        let url = Global.urlEjemplos + request
        axios.get(url).then(response => {
            this.setState({
                hospitales: response.data
            })
        })
    }

    getHospitalesSeleccionados = (e) => {
        e.preventDefault()
        let aux = []
        let options = this.selectHospitales.current.options
        for (var option of options){
            if (option.selected){
               aux.push(option.value) 
            }
        }
        this.setState({
            hospitalesSeleccionados: aux
        })
    }

    componentDidMount = () => {
        this.loadHospitales()
    }

    render() {
        return (
        <div>
            <h1>HospitalesMultiples</h1>
            <form>
                <select className='form-select w-25' size="5" multiple ref={this.selectHospitales}>
                    {
                        this.state.hospitales.map((hospital, index) => {
                            return (<option key={index} value={hospital.idHospital}>
                                {hospital.nombre}</option>)
                        })
                    }
                </select>
                <button className='btn btn-outline-primary mt-2 mb-2 ms-2' onClick={this.getHospitalesSeleccionados}>
                    Mostrar Trabajadores
                </button>
            </form>
            <Trabajadores idhospitales={this.state.hospitalesSeleccionados}/>
        </div>
        )
    }
}
