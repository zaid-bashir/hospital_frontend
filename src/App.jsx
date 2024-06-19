/* eslint-disable no-unused-vars */
import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import AboutUs from './pages/AboutUs'
import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      {/* Mentioning All Routes Inside Router */}

      <Router>
        {/* Navbar Globally Set */}

        <Navbar />
        <Routes>
          {/* Giving Path and React Component Or Page To That Route using <Route /> */}

          <Route path='/' element={<Home />} />
          <Route path='/appointments' element={<Appointment />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        {/* react-toastify Package To Use Toasts In React */}
        
        <ToastContainer position='top-center' />
      </Router>
    </>
  )
}

export default App