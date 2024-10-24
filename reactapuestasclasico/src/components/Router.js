import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import DetalleEquipo from './DetalleEquipo'
import Apuestas from './Apuestas'

export default class Router extends Component {
    render() {
        function DetalleEquipoElement() {
            
            var {id} = useParams()

            return (<DetalleEquipo id={id} />)
        }

        return (
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/detalleEquipo/:id' element={<DetalleEquipoElement/>}/>
                    <Route path='/apuestas' element={<Apuestas/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
