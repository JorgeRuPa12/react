import { Component } from 'react'

class Comic extends Component {
    render() {
        return (
        <div>
            <h1>{this.props.comic.titulo}</h1>
            <p>{this.props.comic.descripcion}</p>
            <img src={this.props.comic.imagen} style={{width:"100px", height:"150px"}}></img>
            <button onClick={ () => {
                this.props.favorito(this.props.comic);
            }}>
                Seleccionar favorito
            </button>
            <button style={{backgroundColor: "red",color: "white",padding:"10px"}}
             onClick={() => {
                this.props.eliminar(this.props.index);
            }}>
                Eliminar Comic
            </button>
        </div>
        )
    }
}

export default Comic;