import React from 'react'
import '../components/PlanTripStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCab,faPlane,faBowlFood, faBed, faMountain } from '@fortawesome/free-solid-svg-icons'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import image3 from "../assets/image1.avif"
import image4 from "../assets/place2.avif"
import image5 from "../assets/place3.avif"
import image6 from "../assets/place4.avif"
import image7 from "../assets/place5.avif"
import image8 from "../assets/place6.avif"

import image9 from "../assets/trips1.avif"
import image10 from "../assets/trips2.avif"
import image11 from "../assets/trips3.avif"
import image12 from "../assets/trips4.avif"
import image13 from "../assets/trips5.avif"
import image14 from '../assets/theme1.avif'
import image15 from '../assets/theme2.avif'
import image16 from '../assets/theme3.avif'
import image17 from '../assets/theme4.avif'
import image18 from '../assets/theme5.avif'

import image19 from '../assets/theme1.avif'
import image20 from '../assets/theme2.avif'
import image21 from '../assets/theme3.avif'
import image22 from '../assets/theme4.avif'
import image23 from '../assets/theme5.avif'

import image24 from '../assets/egypt1.avif'
import image25 from '../assets/egypt2.avif'
import image26 from '../assets/egypt3.avif'
import image27 from '../assets/egypt4.avif'
import image28 from '../assets/egypt5.avif'
import image29 from '../assets/egypt6.avif'
import image30 from '../assets/egypt7.avif'
import image31 from '../assets/egypt8.avif'
import Info from './Info';
import Navbar from './Navbar';


function PlanTrip() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (

    <>
    
    <div className='plantrip'>

      <div className='head'>
        <h2>plan a trip</h2>
      </div>

      <div className='cards-main'>

        <div className='egypt-card'>
          <div className='egypt-heading'>
            <h3>egypt</h3>
            <p>Located on the northeast corner of Africa, Egypt is home to one of the world's earliest and greatest civilizations, with a unified kingdom first surfacing around 3,200 B.C. With a population estimated at more than 99 million, it is the most populous country in the Arab world, and the third-most populous nation</p>
          </div>

          <div className='includes'>
            <h1>itenary includes</h1>
            <div className='symbols'>
               <FontAwesomeIcon className="icon" icon={faBowlFood} />
               <FontAwesomeIcon className="icon" icon={faCab} />
               <FontAwesomeIcon className="icon" icon={faBed} />
               <FontAwesomeIcon className="icon" icon={faPlane} />
               <FontAwesomeIcon className="icon" icon={faMountain} />
            </div>
          </div>

          <div className='cards'>
             <Carousel className="carousel" responsive={responsive}>
                <div className='card'>
                  <img src={image3}></img>
                </div>
                <div className='card'>
                  <img src={image4}></img>
                </div>
                <div className='card'>
                  <img src={image5}></img>
                </div>
                <div className='card'>
                  <img src={image6}></img>
                </div>
                <div className='card'>
                  <img src={image7}></img>
                </div>
                <div className='card'>
                  <img src={image8}></img>
                </div>
                <div className='card'>
                  <img src={image9}></img>
                </div>
                <div className='card'>
                  <img src={image10}></img>
                </div>
                <div className='card'>
                  <img src={image3}></img>
                </div>
                <div className='card'>
                  <img src={image4}></img>
                </div>
                <div className='card'>
                  <img src={image5}></img>
                </div>
                <div className='card'>
                  <img src={image6}></img>
                </div>
              </Carousel>
          </div>

          <div className='btn'>
            <label>book</label>
          </div>
            
        </div>

        <div className='egypt-card'>
          
          <div className='egypt-heading'>
            <h3>Agra</h3>
            <p>Located on the northeast corner of Africa, Egypt is home to one of the world's earliest and greatest civilizations, with a unified kingdom first surfacing around 3,200 B.C. With a population estimated at more than 99 million, it is the most populous country in the Arab world, and the third-most populous nation</p>
          </div>

          <div className='includes'>
            <h1>itenary includes</h1>
            <div className='symbols'>
               <FontAwesomeIcon className="icon" icon={faBowlFood} />
               <FontAwesomeIcon className="icon" icon={faCab} />
               <FontAwesomeIcon className="icon" icon={faBed} />
               <FontAwesomeIcon className="icon" icon={faPlane} />
               <FontAwesomeIcon className="icon" icon={faMountain} />
            </div>
          </div>
          
          <div className='cards'>
             <Carousel className="carousel" responsive={responsive}>
                <div className='card'>
                  <img src={image11}></img>
                </div>
                <div className='card'>
                  <img src={image12}></img>
                </div>
                <div className='card'>
                  <img src={image13}></img>
                </div>
                <div className='card'>
                  <img src={image14}></img>
                </div>
                <div className='card'>
                  <img src={image15}></img>
                </div>
                <div className='card'>
                  <img src={image16}></img>
                </div>
                <div className='card'>
                  <img src={image17}></img>
                </div>
                <div className='card'>
                  <img src={image18}></img>
                </div>
                <div className='card'>
                  <img src={image11}></img>
                </div>
                <div className='card'>
                  <img src={image12}></img>
                </div>
                <div className='card'>
                  <img src={image13}></img>
                </div>
                <div className='card'>
                  <img src={image14}></img>
                </div>
                <div className='card'>
                  <img src={image15}></img>
                </div>
              </Carousel>
          </div>

          <div className='btn'>
            <label>book</label>
          </div>

        </div>

        <div className='egypt-card'>
          
          <div className='egypt-heading'>
            <h3>columbo</h3>
            <p>Located on the northeast corner of Africa, Egypt is home to one of the world's earliest and greatest civilizations, with a unified kingdom first surfacing around 3,200 B.C. With a population estimated at more than 99 million, it is the most populous country in the Arab world, and the third-most populous nation</p>
          </div>

          <div className='includes'>
            <h1>itenary includes</h1>
            <div className='symbols'>
               <FontAwesomeIcon className="icon" icon={faBowlFood} />
               <FontAwesomeIcon className="icon" icon={faCab} />
               <FontAwesomeIcon className="icon" icon={faBed} />
               <FontAwesomeIcon className="icon" icon={faPlane} />
               <FontAwesomeIcon className="icon" icon={faMountain} />
            </div>
          </div>
          
          <div className='cards'>
             <Carousel className="carousel" responsive={responsive}>
                <div className='card'>
                  <img src={image5}></img>
                </div>
                <div className='card'>
                  <img src={image30}></img>
                </div>
                <div className='card'>
                  <img src={image21}></img>
                </div>
                <div className='card'>
                  <img src={image9}></img>
                </div>
                <div className='card'>
                  <img src={image15}></img>
                </div>
                <div className='card'>
                  <img src={image11}></img>
                </div>
                <div className='card'>
                  <img src={image22}></img>
                </div>
                <div className='card'>
                  <img src={image20}></img>
                </div>
                <div className='card'>
                  <img src={image23}></img>
                </div>
                <div className='card'>
                  <img src={image24}></img>
                </div>
                <div className='card'>
                  <img src={image22}></img>
                </div>
                <div className='card'>
                  <img src={image4}></img>
                </div>
                <div className='card'>
                  <img src={image13}></img>
                </div>
              </Carousel>
          </div>

          <div className='btn'>
            <label>book</label>
          </div>

        </div>

        <div className='egypt-card'>
          
          <div className='egypt-heading'>
            <h3>Malaysia</h3>
            <p>Located on the northeast corner of Africa, Egypt is home to one of the world's earliest and greatest civilizations, with a unified kingdom first surfacing around 3,200 B.C. With a population estimated at more than 99 million, it is the most populous country in the Arab world, and the third-most populous nation</p>
          </div>

          <div className='includes'>
            <h1>itenary includes</h1>
            <div className='symbols'>
               <FontAwesomeIcon className="icon" icon={faBowlFood} />
               <FontAwesomeIcon className="icon" icon={faCab} />
               <FontAwesomeIcon className="icon" icon={faBed} />
               <FontAwesomeIcon className="icon" icon={faPlane} />
               <FontAwesomeIcon className="icon" icon={faMountain} />
            </div>
          </div>
          
          <div className='cards'>
             <Carousel className="carousel" responsive={responsive}>
                <div className='card'>
                  <img src={image10}></img>
                </div>
                <div className='card'>
                  <img src={image9}></img>
                </div>
                <div className='card'>
                  <img src={image8}></img>
                </div>
                <div className='card'>
                  <img src={image7}></img>
                </div>
                <div className='card'>
                  <img src={image6}></img>
                </div>
                <div className='card'>
                  <img src={image5}></img>
                </div>
                <div className='card'>
                  <img src={image4}></img>
                </div>
                <div className='card'>
                  <img src={image3}></img>
                </div>
                <div className='card'>
                  <img src={image12}></img>
                </div>
                <div className='card'>
                  <img src={image14}></img>
                </div>
                <div className='card'>
                  <img src={image13}></img>
                </div>
                <div className='card'>
                  <img src={image14}></img>
                </div>
                <div className='card'>
                  <img src={image15}></img>
                </div>
              </Carousel>
          </div>

          <div className='btn'>
            <label>book</label>
          </div>

        </div>

        <div className='egypt-card'>
          
          <div className='egypt-heading'>
            <h3>Bali-indonesia</h3>
            <p>Located on the northeast corner of Africa, Egypt is home to one of the world's earliest and greatest civilizations, with a unified kingdom first surfacing around 3,200 B.C. With a population estimated at more than 99 million, it is the most populous country in the Arab world, and the third-most populous nation</p>
          </div>

          <div className='includes'>
            <h1>itenary includes</h1>
            <div className='symbols'>
               <FontAwesomeIcon className="icon" icon={faBowlFood} />
               <FontAwesomeIcon className="icon" icon={faCab} />
               <FontAwesomeIcon className="icon" icon={faBed} />
               <FontAwesomeIcon className="icon" icon={faPlane} />
               <FontAwesomeIcon className="icon" icon={faMountain} />
            </div>
          </div>
          
          <div className='cards'>
             <Carousel className="carousel" responsive={responsive}>
                <div className='card'>
                  <img src={image24}></img>
                </div>
                <div className='card'>
                  <img src={image23}></img>
                </div>
                <div className='card'>
                  <img src={image22}></img>
                </div>
                <div className='card'>
                  <img src={image21}></img>
                </div>
                <div className='card'>
                  <img src={image20}></img>
                </div>
                <div className='card'>
                  <img src={image19}></img>
                </div>
                <div className='card'>
                  <img src={image18}></img>
                </div>
                <div className='card'>
                  <img src={image17}></img>
                </div>
                <div className='card'>
                  <img src={image16}></img>
                </div>
                <div className='card'>
                  <img src={image15}></img>
                </div>
                <div className='card'>
                  <img src={image14}></img>
                </div>
                <div className='card'>
                  <img src={image13}></img>
                </div>
                <div className='card'>
                  <img src={image3}></img>
                </div>
              </Carousel>
          </div>

          <div className='btn'>
            <label>book</label>
          </div>

        </div>

        <div className='egypt-card'>
          
          <div className='egypt-heading'>
            <h3>Agra</h3>
            <p>Located on the northeast corner of Africa, Egypt is home to one of the world's earliest and greatest civilizations, with a unified kingdom first surfacing around 3,200 B.C. With a population estimated at more than 99 million, it is the most populous country in the Arab world, and the third-most populous nation</p>
          </div>

          <div className='includes'>
            <h1>itenary includes</h1>
            <div className='symbols'>
               <FontAwesomeIcon className="icon" icon={faBowlFood} />
               <FontAwesomeIcon className="icon" icon={faCab} />
               <FontAwesomeIcon className="icon" icon={faBed} />
               <FontAwesomeIcon className="icon" icon={faPlane} />
               <FontAwesomeIcon className="icon" icon={faMountain} />
            </div>
          </div>
          
          <div className='cards'>
             <Carousel className="carousel" responsive={responsive}>
                <div className='card'>
                  <img src={image21}></img>
                </div>
                <div className='card'>
                  <img src={image22}></img>
                </div>
                <div className='card'>
                  <img src={image23}></img>
                </div>
                <div className='card'>
                  <img src={image24}></img>
                </div>
                <div className='card'>
                  <img src={image25}></img>
                </div>
                <div className='card'>
                  <img src={image26}></img>
                </div>
                <div className='card'>
                  <img src={image27}></img>
                </div>
                <div className='card'>
                  <img src={image28}></img>
                </div>
                <div className='card'>
                  <img src={image29}></img>
                </div>
                <div className='card'>
                  <img src={image30}></img>
                </div>
                <div className='card'>
                  <img src={image31}></img>
                </div>
                <div className='card'>
                  <img src={image4}></img>
                </div>
                <div className='card'>
                  <img src={image15}></img>
                </div>
              </Carousel>
          </div>

          <div className='btn'>
            <label>book</label>
          </div>

        </div>

      </div>

      

    </div>



   <Navbar/>
    <Info/>
    </>
  )
}

export default PlanTrip
