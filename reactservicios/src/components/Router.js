import React, { Component } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import TablaMultiplicar from './TablaMultiplicar'
import { useParams } from 'react-router-dom'
import BuscarCoche from './BuscarCoche'
import MenuRutas from './MenuRutas'

export default class Router extends Component {
    

    render() {

        function TablaMultiplicarElemento() {
            //Esta funcion sirve para capturar los parametros de una ruta
            let {minumero} = useParams();

            //Devolvemos el componente correspondiente cons us props
            return <TablaMultiplicar numero={minumero}/>
        }
        return (
        <div>
            <BrowserRouter>
            <MenuRutas/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/tabla/:minumero'
                    element={<TablaMultiplicarElemento/>}/>
                   {/* Para las rutas que no existen debemos utilizar un asterisco dentro del path
                    y debe ser la ultima etiqueta de <Routes>*/} 
                    <Route path="*" element={<NotFound/>}/>
                    <Route path='/coche' element={<BuscarCoche/>}/>
                </Routes>
            </BrowserRouter>
        </div>
        )
    }
}
