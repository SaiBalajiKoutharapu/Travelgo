import React from 'react'
import Navbar from '../components/Navbar';
import ServiceImg from "../assets/image6.avif";
import '../components/AboutStyles.css';
import Info from '../components/Info';

function Service() {
  return (
    <div>
      <Navbar />

      <div className="hero">
            <img src={ServiceImg}></img>
            <div className='hero-text'>
                <h1>get 50% off on summer trips</h1>
                <a href='./PlanTrip' className="btnclass">
                    plan a trip
                </a>
            </div>
      </div>

     <Info/>

    </div>

    
  )
}

export default Service