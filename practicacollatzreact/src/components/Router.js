import React, { Component } from 'react'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Home from './Home'
import Collatz from './Collatz'
import NotFound from './NotFound'


export default class Router extends Component {
  render() {
    function CollatzElemento () {
        var {minumero} = useParams()

        return <Collatz numero={minumero}/>
    }

    return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/collatz/:minumero' 
                element={<CollatzElemento />} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
