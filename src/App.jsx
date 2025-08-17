import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Intropage from './Intropage'
import About from './About'
import Experience from './Experience'
import Project from './Project'
import Footer from './Footer'
import Navbar from './Nav'

function App() {
 

  return (
    <>
      <div>
      <Navbar />
      
      <Intropage />      
      <br />
      <About />
      <br />
      <Experience />
      <br />
      <Project />
      <hr style={{ border: "1px solid black", backgroundColor: "black", color: "black" }} />
      <Footer/>
      </div>
      
     
    </>
  )
}

export default App;
