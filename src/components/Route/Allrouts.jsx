import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../home/Home'
import About from '../about/About'
import Products from '../products/Products'
import Company from '../company/Company'
import Pagenotfound from '../notfound/404'

function Allrouts() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} >
                <Route path='Company' element={<Company />} />
            </Route>
            <Route path='/Products' element={<Products />} />
            <Route path='*' element={<Pagenotfound />} />
        </Routes>
    )
}

export default Allrouts