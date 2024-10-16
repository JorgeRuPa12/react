import React, { Component } from 'react'
//Importar la librería de axios
import axios from 'axios';

import Global from '../Global';

export default class ServicioCustomers extends Component {
    urlCustomers = Global.urlApiCustomers;

    //Necesitamos una variable en state para almacenar los clientes
    state = {
        customers: []
    }

    //Recuperar los clientes con axios
    loadCustomers = () => {
        console.log("Antes del servicio")
        axios.get(this.urlCustomers).then(response => {
            console.log("Leyendo ...")
            this.setState({
                customers: response.data.results
            })
        })
        console.log("Despues del servicio")
    }

    //Vamos a cargar los datos en metodo inicial de la pagina
    //Lo haremos solamente una vez 
    componentDidMount = () => {
        this.loadCustomers()
    }

    render() {
        return (
        <div>
            <h1>Servicio Api Customers</h1>
            {
                this.state.customers &&
                (
                    this.state.customers.map((customer, index) => {
                        return(
                            <h2 style={{color:"burlywood"}} key={index}>{customer.contactName}</h2>
                        )
                    })
                )
            }
        </div>
        )
    }
}
