import React from 'react'
import Home from './Home'
import Maped from './Maped'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import "./App.css"
export default function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Maped/:id' element={<Maped/>}/>
          </Routes>
        </BrowserRouter>    
    </>
  )
}
