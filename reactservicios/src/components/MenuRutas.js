import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
    render() {
        return (
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/tabla/21">Tabla multiplicar 21</NavLink></li>
                <li><NavLink to="/tabla/66">Tabla multiplicar 66</NavLink></li>
                <li><NavLink to="/noexisto">Sin ruta</NavLink></li>
                <li><NavLink to="/coche">Buscar Coches</NavLink></li>
            </ul>
        </div>
        )
    }
}
