import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import MenuCoches from './MenuCoches'
import Home from './Home'
import CreateCoche from './CreateCoche'
import UpdateCoche from './UpdateCoche'
import DetalleCoche from './DetalleCoche'

export default class Router extends Component {
    render() {
        function DetalleCocheElement() {
            var {id} = useParams()

            return (<DetalleCoche id={id} />)
        }

        function UpdateCocheElement() {
            var {id, marca, modelo, conductor} = useParams()

            return (<UpdateCoche id={id} marca={marca}
                 modelo={modelo} conductor={conductor}/>)
        }
        return (
            <BrowserRouter>
            <MenuCoches/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/detalle/:id' element={<DetalleCocheElement/>} />
                    <Route path='/create' element={<CreateCoche/>}/>
                    <Route path='/update/:id/:marca/:modelo/:conductor' element={<UpdateCocheElement />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
