import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import AboutUs from './components/About/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import AddTask from './components/Todo/Add'
import DisplayAll from './components/Todo/DisplayAll'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<DisplayAll />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </>

  )
}

export default App
