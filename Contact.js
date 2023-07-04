import React from 'react'
import Navbar from '../components/Navbar';
import ContactImg from "../assets/image4.avif";
import Enquiry from '../components/Enquiry';
import Info from '../components/Info';



function Contact() {
  return (
    <div>
      <Navbar />
       

      <div className="hero">
            <img src={ContactImg}></img>
            <div className='hero-text'>
                <h1>get 50% off on summer trips</h1>
                <a href='./PlanTrip' className="btnclass">
                    plan a trip
                </a>
            </div>
      </div>

      <Enquiry />
      <Info/>
    </div>
  )
}

export default Contact