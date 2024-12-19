import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import MeHome from './components/MeHome'
import NavProvider from './context/Nav-context'

export default function App() {
    return (
        <NavProvider>
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<MeHome/>} />
            </Routes>
        </BrowserRouter>
        </NavProvider>


    )
}
