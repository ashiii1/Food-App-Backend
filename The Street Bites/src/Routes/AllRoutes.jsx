import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Menu from "../Pages/Menu"
import Contact from "../Pages/Contact"
import Login from "../Pages/Login"
import About from '../Pages/About'
import MenuCard from '../Pages/MenuCard'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path='/login' element={<Login />} />
    <Route path="/menucard" element={<MenuCard />} />
    <Route path="/menu/:id" element={<Menu />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/about" element={<About />}/>
    </Routes>
  )
}

export default AllRoutes