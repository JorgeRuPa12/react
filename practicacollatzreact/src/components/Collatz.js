import React, { Component } from 'react'

export default class Collatz extends Component {
    state = {
        cadena: []
    }
    realizarCollatz = () => {
        let num = parseInt(this.props.numero)
        let aux = []
        aux.push(num)
        while(num !== 1){
            if(num%2 === 0){
                num = num/2
                aux.push(num)
            }else{
                num = (num*3)+1
            }
        }
        this.setState({
            cadena: aux
        })
        
    }

    componentDidMount = () => {
        this.realizarCollatz()
    }

    render() {
        return (
        <div>
            <h1>Collatz</h1>
            <ul>
                {
                    this.state.cadena.map((numero, index) => {
                        return(<li key={index}>{numero}</li>)
                    })
                }
            </ul>
        </div>
        )
    }
}
