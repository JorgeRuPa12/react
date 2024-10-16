import React, { Component } from 'react'

export default class Collatz extends Component {
    cajaNum = React.createRef()

    state = {
        cadena: [],
        error: ""
    }

    realizarOp = (e) => {
        e.preventDefault();
        let cadena = [];
        let num = parseInt(this.cajaNum.current.value);
        cadena.push(num)

        if(num<=1){
            this.setState({
                error: "Introduce un numero mayor a 1"
            })
            return
        }
        
        while (num !== 1){
            if (num%2 === 0){
                num = num/2;
                cadena.push(num)
            }else {
                num = (num*3)+1
                cadena.push(num)
            }
        }
        this.setState({
            error: "",
            cadena: cadena
        })


    }

    render() {
        return (
        <div>
            <h1>Collatz</h1>
            {
                this.state.error &&
                (
                    <h2 style={{color:"red"}}>{this.state.error}</h2>
                )
            }
            <form onSubmit={this.realizarOp}>
                <label>Introduzca un numero: </label>
                <input type='text' ref={this.cajaNum} />
                <button>Enviar datos</button>
            </form>
            {
                this.state.cadena &&
                (
                    <ul>
                        {
                          this.state.cadena.map((numero, index) => {
                            return (
                                <li key={index}>{numero}</li>
                            )
                        })  
                        }
                    
                    </ul>
                )
                
            }
        </div>
        )
    }
}
