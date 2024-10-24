import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import HomeDepartamentos from './HomeDepartamentos'
import MenuDepartamentos from './MenuDepartamentos'
import CreateDepartamentos from './CreateDepartamentos'
import DetalleDepartamento from './DetalleDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
import DeleteDepartamento from './DeleteDepartamento'


export default class Router extends Component {
    render() {
        function DetalleDepartamentoElement(){
            let {iddepartamento} = useParams()
            return (<DetalleDepartamento id={iddepartamento} />)
        }

        function UpdateDepartamentoElement() {
            let {id, nombre, localidad} = useParams();
            return (<UpdateDepartamento id={id} nombre={nombre} localidad={localidad} />)
        }

        function DeleteDepartamentoElement() {
            let {id} = useParams();
            return (<DeleteDepartamento id={id}/>)
        }

        return (
            <BrowserRouter>
                <MenuDepartamentos/>
                <Routes>
                    <Route path='/' element={<HomeDepartamentos/>}/>
                    <Route path='/create' element={<CreateDepartamentos/>} />
                    <Route path='/detalles/:iddepartamento' element={<DetalleDepartamentoElement/>}/>
                    <Route path='update/:id/:nombre/:localidad' element={<UpdateDepartamentoElement/>} />
                    <Route path='delete/:id' element={<DeleteDepartamentoElement/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}
