import React from 'react'
import './RecentTripsStyles.css'
import { Link } from 'react-router-dom'
import EgyptItenary from './EgyptItenary'
import tripimage1 from "../assets/trips1.avif"
import tripimage2 from "../assets/trips2.avif"
import tripimage3 from "../assets/trips3.avif"
import tripimage4 from "../assets/trips4.avif"
import tripimage5 from "../assets/trips5.avif"
import theme1 from '../assets/theme1.avif'
import theme2 from '../assets/theme2.avif'
import theme3 from '../assets/theme3.avif'
import theme4 from '../assets/theme4.avif'
import theme5 from '../assets/theme5.avif'


function RecentTrips() {
  return (
    <div className='RecentTrip'>

        <div className='head'>
            <h6>recent trips</h6>
        </div>


    <div className='RecentTrips'>
    

        <div className='Trips'>

            <div className='trip-image'>
                <img src={tripimage1}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to Egypt</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
                <a href="/EgyptItenary"><button >check itenary</button></a>
                <label>3500/pax</label>
            </div>

        </div>

        <div className='Trips'>

            <div className='trip-image'>
                <img src={tripimage2}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to Agra</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
            <a href="/EgyptItenary"><button>check itenary</button></a>
                <label>4400/pax</label>
            </div>
            
        </div>

        <div className='Trips'>

            <div className='trip-image'>
                <img src={tripimage3}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to bali</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
            <a href="/EgyptItenary"><button>check itenary</button></a>
                <label>3000/pax</label>
            </div>
            
        </div>

        <div className='Trips'>

            <div className='trip-image'>
                <img src={tripimage4}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to maldives</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
                <a href="/EgyptItenary"><button>check itenary</button></a>
                <label>6000/pax</label>
            </div>
            
        </div>

        <div className='Trips'>

            <div className='trip-image'>
                <img src={theme1}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to Egypt</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
                <a href="/EgyptItenary"><button>check itenary</button></a>
                <label>8500/pax</label>
            </div>

        </div>


        <div className='Trips'>

            <div className='trip-image'>
                <img src={tripimage5}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to andaman</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
                <a href="/EgyptItenary"><button>check itenary</button></a>
                <label>7500/pax</label>
            </div>

        </div>

        <div className='Trips'>

            <div className='trip-image'>
                <img src={theme4}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to andaman</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
                <a href="/EgyptItenary"><button>check itenary</button></a>
                <label>10000/pax</label>
            </div>

        </div>

        <div className='Trips'>

            <div className='trip-image'>
                <img src={theme5}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to andaman</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
                <a href="/EgyptItenary"><button>check itenary</button></a>
                <label>8500/pax</label>
            </div>

        </div>

        <div className='Trips'>

            <div className='trip-image'>
                <img src={tripimage1}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to Egypt</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
                <a href="/EgyptItenary"><button >check itenary</button></a>
                <label>3500/pax</label>
            </div>

        </div>

        <div className='Trips'>

            <div className='trip-image'>
                <img src={tripimage2}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to Agra</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
            <a href="/EgyptItenary"><button>check itenary</button></a>
                <label>4400/pax</label>
            </div>
            
        </div>

        <div className='Trips'>

            <div className='trip-image'>
                <img src={tripimage3}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to bali</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
            <a href="/EgyptItenary"><button>check itenary</button></a>
                <label>3000/pax</label>
            </div>
            
        </div>

        <div className='Trips'>

            <div className='trip-image'>
                <img src={tripimage1}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to Egypt</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
                <a href="/EgyptItenary"><button >check itenary</button></a>
                <label>3500/pax</label>
            </div>

        </div>

        <div className='Trips'>

            <div className='trip-image'>
                <img src={tripimage2}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to Agra</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
            <a href="/EgyptItenary"><button>check itenary</button></a>
                <label>4400/pax</label>
            </div>
            
        </div>

        <div className='Trips'>

            <div className='trip-image'>
                <img src={tripimage3}></img>
            </div>

            <div className='trip-head'>
                <h5>Trip to bali</h5>
            </div>

            <div className='trip-para'>
                <p>
                Egypt, a country linking northeast Africa with the Middle East, 
                dates to the time of the pharaohs. Millennia-old monuments sit along 
                the fertile Nile River Valley, including Giza's colossal Pyramids 
                and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple.
                </p>
            </div>

            <div className='check'>
            <a href="/EgyptItenary"><button>check itenary</button></a>
                <label>3000/pax</label>
            </div>
            
        </div>

        </div>
        
    </div>
  )
}

export default RecentTrips