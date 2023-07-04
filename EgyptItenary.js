import React from 'react'
import './EgyptItenaryStyles.css'
import egypt1 from '../assets/egypt1.avif'
import egypt2 from '../assets/egypt2.avif'
import egypt3 from '../assets/egypt3.avif'
import egypt4 from '../assets/egypt4.avif'
import egypt5 from '../assets/egypt5.avif'
import egypt6 from '../assets/egypt6.avif'
import egypt7 from '../assets/egypt7.avif'
import egypt8 from '../assets/egypt8.avif'

import Info from './Info';
import Navbar from './Navbar';

function EgyptItenary(props) {
  return (

    <>
    <div className='Egypt-Itenary'>
        <div className='heading'>
            <h1>{props.name} trip itenary 4d/5n</h1>
        </div>

        <div className='details'>
            <div className='images'>
                <img src={egypt1}></img>
                <img src={egypt2}></img>
                <img src={egypt3}></img>
                <img src={egypt4}></img>
                <img src={egypt5}></img>
                <img src={egypt6}></img>
            </div>
            <div className='itenary'>

                <div className='day'>
                    <h2>day 1</h2>
                    <p>
                    Experience the ultimate in luxury with our Egypt Ultimate<br/> 
                    Luxury Tours.<br/>  Discover a world of ancient wonders and modern 
                    marvels on an Egypt Ultimate Luxury Tour.<br/>  Enjoy the Ultimate 
                    Luxury Lifestyle Experience in Egypt. Our Luxury Tours provides 
                    the ultimate travel<br/>  experience for those looking to explore the 
                    culture, history, and beauty<br/>  of this ancient land. With our 
                    experienced and knowledgeable tour leaders, we provide a unique 
                    </p>
                </div>

                <div className='day'>

                    <h2>day 2</h2>
                    <p>
                    Experience the ultimate in luxury with our Egypt Ultimate<br/> 
                    Luxury Tours.<br/>  Discover a world of ancient wonders and modern 
                    marvels on an Egypt Ultimate Luxury Tour.<br/>  Enjoy the Ultimate 
                    Luxury Lifestyle Experience in Egypt. Our Luxury Tours provides 
                    the ultimate travel<br/>  experience for those looking to explore the 
                    culture, history, and beauty<br/>  of this ancient land. With our 
                    experienced and knowledgeable tour leaders, we provide a unique 
                    </p>

                </div>

                <div className='day'>

                    <h2>day 3</h2>
                    <p>
                    Experience the ultimate in luxury with our Egypt Ultimate<br/> 
                    Luxury Tours.<br/>  Discover a world of ancient wonders and modern 
                    marvels on an Egypt Ultimate Luxury Tour.<br/>  Enjoy the Ultimate 
                    Luxury Lifestyle Experience in Egypt. Our Luxury Tours provides 
                    the ultimate travel<br/>  experience for those looking to explore the 
                    culture, history, and beauty<br/>  of this ancient land. With our 
                    experienced and knowledgeable tour leaders, we provide a unique 
                    </p>

                </div>

                <div className='day'>

                    <h2>day 4</h2>
                    <p>
                    Experience the ultimate in luxury with our Egypt Ultimate<br/> 
                    Luxury Tours.<br/>  Discover a world of ancient wonders and modern 
                    marvels on an Egypt Ultimate Luxury Tour.<br/>  Enjoy the Ultimate 
                    Luxury Lifestyle Experience in Egypt. Our Luxury Tours provides 
                    the ultimate travel<br/>  experience for those looking to explore the 
                    culture, history, and beauty<br/>  of this ancient land. With our 
                    experienced and knowledgeable tour leaders, we provide a unique 
                    </p>

                </div>

                <div className='day'>

                    <h2>day 5</h2>
                    <p>
                    Experience the ultimate in luxury with our Egypt Ultimate<br/> 
                    Luxury Tours.<br/>  Discover a world of ancient wonders and modern 
                    marvels on an Egypt Ultimate Luxury Tour.<br/>  Enjoy the Ultimate 
                    Luxury Lifestyle Experience in Egypt. Our Luxury Tours provides 
                    the ultimate travel<br/>  experience for those looking to explore the 
                    culture, history, and beauty<br/>  of this ancient land. With our 
                    experienced and knowledgeable tour leaders, we provide a unique 
                    </p>

                </div>

            </div>
        </div>


        
    </div>

    <Navbar/>

    <Info/>

    </>
  )
}

export default EgyptItenary