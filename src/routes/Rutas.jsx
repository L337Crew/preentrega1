import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Inicio from '../pages/Inicio';
import Componentes from '../pages/Componentes';
import Perifericos from '../pages/Perifericos';
import Contacto from '../pages/Contacto';
import Navbar from '../components/Navbar/Navbar';
import ItemListContainer from '../pages/ItemListContainer';


const Rutas = () => {
    const navbar_items = [
        {
            path: "/",
            name: "Inicio"
        },
        {
            path: "/Componentes",
            name: "Componentes"
        },
        {
            path: "/Perifericos",
            name: "Perifericos"
        },
        {
            path: "/Contacto",
            name: "Contacto"
        }
    ]
  return (
    <BrowserRouter>
    <Navbar navbar_items= {navbar_items}/>
    <Routes>
       <Route path='/' element={<Inicio/>} />
       <Route path='/Componentes' element={<Componentes/>} />
       <Route path='/Perifericos' element={<Perifericos/>} />
       <Route path='/Contacto' element={<Contacto/>} />
       <Route path='/item/:id' element={<ItemListContainer/>} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default Rutas