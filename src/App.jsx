/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
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
import { Context } from './main'
import axios from 'axios'
import Footer from "./components/Footer"
import ApiList from './pages/Api'

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  const fetchUser = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:4000/api/v1/user/patient/me", { withCredentials: true });
      setIsAuthenticated(true);
      setUser(response.data.user);
    } catch (error) {
      setIsAuthenticated(false);
      setUser(error.response.data.user);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [isAuthenticated]);

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
          <Route path='/api/v1' element={<ApiList />} />

        </Routes>
        {/* react-toastify Package To Use Toasts In React */}

        <ToastContainer position='top-center' />
        <Footer />
      </Router>
    </>
  )
}

export default App