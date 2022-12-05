import React from 'react'
import { Routes , Route  } from "react-router-dom";
import NavBar from "./Components/NavBar"
import About from "./Components/About"
import Home from "./Components/Home"
import Services from "./Components/Services"


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
    </Routes>
    </>
  )
}

export default App