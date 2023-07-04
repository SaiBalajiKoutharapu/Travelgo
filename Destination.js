import React from 'react'
import firstImage from "../assets/image7.avif"
import secondImage from "../assets/image8.avif"
import thirdImage from "../assets/image1.avif"
import fourthImage from "../assets/place2.avif"
import fifthImage from "../assets/place3.avif"
import sixthImage from "../assets/place4.avif"
import seventhImage from "../assets/place5.avif"
import eighthImage from "../assets/place6.avif"

import "./DestinationStyles.css"

function Destination() {
  return (
    <div className='destination'>
        <div className='heading'>
            <h1>Popular Destinations</h1>
        </div>

        <div className='first-des'>
            <div className='des-text'>
            <div className='heading2'>
                <h2>Our Planning</h2>
                <p>we plan for the best travel experience and our agency provide
                    the package of all in one in which you will cover all the required eminities for a travel
                    and it will includes food,travel tickets,guidance,hotel stays and and time leasing
                    destination travel expeience. plan for the best travel experience and our agency provide
                    the package of all in one in which you will cover all the required eminities for a travel
                    and it will includes food,travel tickets,guidance,hotel stays and and time leasing
                    destination travel expeience
                </p>
            </div>
            </div>

            <div className='first-des-images'>
                <img src={firstImage}></img>
                <img src={secondImage}></img>
            </div>
        </div>


        

        <div className='place-images'>
            <img src={thirdImage}></img>
            <img src={fifthImage}></img>
            <img src={sixthImage}></img>
            <img src={fourthImage}></img>
            <img src={seventhImage}></img>
            <img src={eighthImage}></img>
        </div>
    

    </div>
        
  )
}

export default Destination