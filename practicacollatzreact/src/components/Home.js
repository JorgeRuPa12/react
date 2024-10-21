import React, { Component } from 'react'

export default class Home extends Component {
    cajaNumero = React.createRef()
    state = {
        enlace: ""
    }

    hacerCollatz = (e) => {
        e.preventDefault()
        let num = this.cajaNumero.current.value
        let enlace = "http://localhost:3000/collatz/"+num
        this.setState({
            enlace: enlace
        })
    }

    render() {
        return (
        <div>
            <h1 style={{color:"rebeccapurple"}}>HOME</h1>
            <img src="https://www.proiectari.md/wp-content/uploads/2023/12/model-casa.jpg" style={{width:"500px", height:"250px"}}/>
            <form onSubmit={this.hacerCollatz}>
                <label>Introduzca Numero: </label>
                <input type='text' ref={this.cajaNumero}/>
                <button>Cargar</button>
                
            </form>
            {
                this.state.enlace !== "" &&
                (
                    <a href={this.state.enlace}>Collatz</a>
                )
            }
            
        </div>
        )
    }
}
