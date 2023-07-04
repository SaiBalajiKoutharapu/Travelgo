import React from 'react'
import Navbar from '../components/Navbar';
import AboutAwards from '../components/AboutAwards'
import Info from '../components/Info';




function About() {
  return (
    <div>
      <Navbar />

      <div className="hero">
            <img src="https://images.unsplash.com/photo-1585584565753-8e947d772f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
            <div className='hero-text'>
                <h1>get 50% off on summer trips</h1>
                <a href='./PlanTrip' className="btnclass">
                    plan a trip
                </a>
            </div>
      </div>

      <AboutAwards />
      <Info/>
      
    </div>
  )
}

export default About


