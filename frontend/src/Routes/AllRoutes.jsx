import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home Page/Home"
import Contact from "../Pages/Contact page/Contact"
import About from '../Pages/About-us Page/About'
import MenuCard from '../Pages/Menu Page/MenuCard'
import Signin from '../Components/SignIn'
import MenuCategory from '../Pages/Our Menu Page/MenuCategory'
import { PageNotFound } from '../Pages/NotFoundPage'
import CartItem from '../Pages/Cart Page/CartItem'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/menucard" element={<MenuCard />} />
    <Route path="/menu" element={<MenuCategory />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/cart" element={<CartItem />} />
    <Route path="*" element={<PageNotFound />} />


    <Route path='/signin' element={<Signin />} />
    </Routes>
  )
}

export default AllRoutes