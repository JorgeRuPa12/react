import React, { Component } from 'react'

export default class FormSimple extends Component {
    //Necesitamos declarar variables de referencia
    //para cada control de rect
    cajaNombre = React.createRef()
    cajaEdad = React.createRef()
    
    //Para procesar la peticion necesitamos un metodo que reciba event (e)

    peticionForm = (e) => {
        e.preventDefault();
        console.log("Peticion lista")
        let nombre = this.cajaNombre.current.value;
        let edad = parseInt(this.cajaEdad.current.value);
        
        this.setState({
            user:{
                nombre:nombre,
                edad:edad
            }
        })
    }
    
    state = {
        user: null
    }

    render() {
        return (
        <div>
            <h1>Formulario simple React</h1>
            {
                this.state.user &&
                (
                    <h2 style={{color:"saddlebrown", backgroundColor:"silver", width:"100%"}}>
                        Nombre: {this.state.user.nombre} Edad: {this.state.user.edad} 
                    </h2>
                )
            }
            <form onSubmit={this.peticionForm}>
                <label>Nombre: </label>
                <input type="text" ref={this.cajaNombre}/><br/>
                <label>Edad: </label>
                <input type="text" ref={this.cajaEdad}/><br/>
                <button>
                    Enviar datos
                </button>
            </form>
        </div>
        )
    }
}
