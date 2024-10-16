import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    selectMultiple = React.createRef()

    state = {
        seleccionados: ""
    }

    mostrarMultiples = (e) => {
        e.preventDefault()
        //En un select multiple tenemos un array con todos los options
        let options = this.selectMultiple.current.options;
        let datos = ""
        for (var option of options) {
            if (option.selected == true){
                datos += option.value+" | "
            }
        }
        //Modificar el state del render
        this.setState({
            seleccionados: datos
        })
    }

    render() {
        return (
        <div>
            <h1>Seleccion Multiple</h1>
            <h2 style={{color:"blueviolet"}}>{this.state.seleccionados}</h2>
            <form onSubmit={this.mostrarMultiples}>
                <select size="10" multiple ref={this.selectMultiple}>
                    <option>Elemento 1</option>
                    <option>Elemento 2</option>
                    <option>Elemento 3</option>
                    <option>Elemento 4</option>
                    <option>Elemento 5</option>
                    <option>Elemento 6</option>
                    <option>Elemento 7</option>
                </select>
                <button>
                    Mostrar seleccionados
                </button>
            </form>
        </div>
        )
    }
}
