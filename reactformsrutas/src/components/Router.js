import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Home from './Home'
import Cine from './Cine'
import Musica from './Musica'
import Collatz from './Collatz';
import TablaMultiplicar from './TablaMultiplicar';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cine" element={<Cine/>}/>
                    <Route path="/musica" element={<Musica/>}/>
                    <Route path="/collatz" element={<Collatz/>}/>
                    <Route path="/tablaMultiplicar" element={<TablaMultiplicar/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
