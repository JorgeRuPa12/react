import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Home from './Home'
import Cine from './Cine'
import Musica from './Musica'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cine" element={<Cine/>}/>
                    <Route path="/musica" element={<Musica/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
