import { Component } from "react";
class DibujosComplejos extends Component{
    dibujarNumeros = () => {
        var lista=[];

        for (var i = 0; i <= 7; i++) {
            var numero = parseInt(Math.random() * 100) + 1;
            //Mediante el metodo push del Array iremos
            //rellenando el codigo HTML
            lista.push(<li key={i}>{numero}</li>)
        }
        return lista;
    }

    recarga = () => {
        window.location.reload()
    }

    render(){
        return(
            <div>
                <h1>Dibujos Complejos HTML</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
                <button onClick={ () => this.recarga()}>Recargar</button>
            </div>
        )
    }
}

export default DibujosComplejos;