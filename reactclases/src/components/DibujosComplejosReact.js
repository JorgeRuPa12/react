import { Component } from 'react'

export class DibujosComplejosReact extends Component {
    //En state tendremos un conjunto de nombres
    state = {
        nombres: ["Lucia","Rogelio","Eutanasia","Florentina","Anastasio","Fulgencio"]
    }

    generarNombre = () => {
        this.state.nombres.push("NUEVO NOMBRE");
        //Actualizamos state
        this.setState({
            nombres: this.state.nombres
        })
    }

    render() {
        return (
        <div>
            <h1>Dibujos Complejos React Collection</h1>
            <button onClick={ () => this.generarNombre()}>
                Generar Nombre
            </button>
            {
                //Esto es codigo react, es diferente al codigo JS
                //Es codigo logico con sintaxis JSX
                //Es codigo logico debe contener un return
                this.state.nombres.map((name, index) => {
                    //Este codigo nunca debe estar vacio siempre
                    //tiene que devolver un return
                    return(<h1 key={index} style={{color:"blue"}}>{name}</h1>)
                })
            }
        </div>
        )
    }
}

export default DibujosComplejosReact;