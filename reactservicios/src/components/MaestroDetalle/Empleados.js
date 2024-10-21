import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

// function GetParametroComponentCine() {
//     //Capturamos la variable o variables de ruta mediante desestructurar
//     let {idcine, otroparametro} = useParams();
//     //Una vez que tenemos los valores de la ruta ya podemos
//     //Dibujaar la etiqueta del component CI con sus Props
//     return <Cine idcine={idcine} otroprops={otroparametro} />
// }

export default class Empleados extends Component {
    state = {
        empleados: []
    }

    loadEmpleados = () => {
        let idDepartamento = this.props.iddepartamento
        console.log(idDepartamento)
        var request = "api/Empleados/EmpleadosDepartamento/"+idDepartamento
        var url = Global.urlEmpleados+request;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    componentDidUpdate = (prevProps) => {
        console.log("Dibujando Component: "+this.props.iddepartamento);
        
        if (this.props.iddepartamento !== prevProps.iddepartamento) {

            this.setState({
                texto: "Update: "+ this.props.iddepartamento
            })
            this.loadEmpleados()
            
        }
        
    }

    render() {
        return (
        <div>
            <h3>Empleados {this.props.iddepartamento}</h3>
            <h2>{this.state.texto}</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Apellido</th>
                        <th>Oficio</th>
                        <th>Departamento</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        this.state.empleados.map((empleado, index) => {
                            return(
                                <tr key={index}>
                                    <td>{empleado.apellido}</td>
                                    <td>{empleado.oficio}</td>
                                    <td>{empleado.departamento}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        )
    }
}
