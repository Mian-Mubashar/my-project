import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Sign_up from './components/Sign_up'
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
import Addproduct from './components/Addproduct'

const App = () => {
  return (

    <div  >
      <BrowserRouter className="flex ">
        <Nav />
        <Routes className="flex">
          
        <Route element={<PrivateComponent/>} >
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/AddProduct" element={<Addproduct/>} />
          <Route path="/UpdateProduct" element={<h1>Update Product</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/profile" element={<h1>User Profile</h1>} />
          </Route>

          <Route path="/SignUp" element={<Sign_up/>} /> 
          <Route path="/login" element={<Login/>} /> 

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
