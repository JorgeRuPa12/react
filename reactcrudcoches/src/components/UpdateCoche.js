import React, { Component } from 'react'

export default class UpdateCoche extends Component {
    cajaId = React.createRef()
    cajaMarca = React.createRef()
    cajaModelo = React.createRef()
    cajaConductor = React.createRef()
    cajaImagen = React.createRef()

    state = {
        status: false
    }

    render() {
        return (
        <div>UpdateCoche</div>
        )
    }
}
