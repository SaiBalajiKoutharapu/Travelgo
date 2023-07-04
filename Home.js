import React from 'react'
import Navbar from '../components/Navbar';
import Destination from '../components/Destination';
import TourItenary from '../components/TourItenary';
import RecentTrips from '../components/RecentTrips';
import video from '../assets/video.mp4';
import '../components/HomeStyles.css'
import Info from '../components/Info';




function Home() {
  return (
    <div>
      <Navbar />

      <div className="hero">
          <video muted autoPlay loop src={video}></video>
            <div className='hero-text'>
                <h1>get 50% off on summer trips</h1>
                <a href='/PlanTrip' className="btnclass">plan a trip</a>
            </div>
      </div>

      <div className='book'>

        <div className='location'>
          <h1>location</h1>
          <input type="text" placeholder='enter destination' ></input>
        </div>

        <div className='location'>
          <h1>no of people</h1>
          <input type="text" placeholder='no of persons' ></input>
        </div>

        <div className='location'>
          <h1>cost </h1>
          <input type="text" placeholder='ex-15000/Rs' ></input>
        </div>

        <div className='submit'>
          <button>submit</button>
        </div>

      </div>

      <Destination />
      <RecentTrips />
      <Info/>
      
    </div>
  )
}

export default Home