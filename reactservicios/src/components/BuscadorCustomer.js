import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class BuscadorCustomer extends Component {
    urlCustomers = Global.urlApiCustomers
    cajaId = React.createRef()

    state = {
        customer: null
    }

    buscarCustomer = (e) => {
        e.preventDefault()
        //Recuperamos el valor de la caja
        let customerId = this.cajaId.current.value
        let request = "customers/"+customerId
        axios.get(this.urlCustomers+request).then(response => {
            this.setState({
                customer: response.data.customer
            })
        })
    }

    render() {
        return (
        <div>
            <h1>Buscador Api Customer</h1>
            <form>
                <label>ID Customer</label>
                <input type="text" ref={this.cajaId} />
                <button onClick={this.buscarCustomer}>
                    Buscar Customer
                </button>
            </form>
            {
                this.state.customer &&
                (
                   <ul>
                        <li>{this.state.customer.contactName}</li>
                        <li>Empresa: {this.state.customer.companyName}</li>
                        <li>Puesto: {this.state.customer.contactTitle}</li>
                        <li>Ciudad: {this.state.customer.city}</li>
                    </ul> 
                )
                
            }
        </div>
        )
    }
}
