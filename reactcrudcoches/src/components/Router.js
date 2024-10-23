import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import MenuCoches from './MenuCoches'
import Home from './Home'
import CreateCoche from './CreateCoche'
import UpdateCoche from './UpdateCoche'

export default class Router extends Component {
    render() {
        function UpdateCocheElement() {
            var {id, marca, modelo, conductor, imagen} = useParams()

            return (<UpdateCoche id={id} marca={marca}
                 modelo={modelo} conductor={conductor}
                 imagen={imagen} />)
        }
        return (
            <BrowserRouter>
            <MenuCoches/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/create' element={<CreateCoche/>}/>
                    <Route path='/update/:id/:marca/:modelo/:conductor/:imagen' element={<UpdateCocheElement />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
