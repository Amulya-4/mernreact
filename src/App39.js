import React from 'react'
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Login1 from './Login1'
import About from './About'
import Contact from './Contact'
import Home1 from './Home1';
export default function App39() {
  return (
    <div>
        <Router>
            <p>
                <Link to="/Home1">Home</Link> | <Link to="/about">About</Link> |
                <Link to="/Contact">Contact</Link> | <Link to="/Login1">Login</Link> 
            </p>
            <Routes>
                <Route index element={<Login1/>}/>
                <Route path="/Home1" element={<Home1/>} />
                <Route path="/About" element={<About/>} />s
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/Login1" element={<Login1/>} />
            </Routes>
        </Router>
    </div>
  )
}
