import React from 'react'
import award1 from '../assets/awards1.png'
import award2 from '../assets/awards2.jpg'
import award3 from '../assets/awards3.jpg'
import theme1 from '../assets/theme1.avif'
import theme2 from '../assets/theme2.avif'
import theme3 from '../assets/theme3.avif'
import theme4 from '../assets/theme4.avif'
import theme5 from '../assets/theme5.avif'

import './AboutAwardsStyles.css'

function About() {
  return (
    <div className='Awards'>

        <div className='awards-head'>
            <h1>Awards Achieved</h1>
        </div>

        <div className='awards'>
            <div className='images'>
              <img src={award1}></img>
              <img src={award2}></img>
              <img src={award3}></img>
            </div>
        </div>

        <div className='themes'>

          <div className='heading'>
            <h2>themes you can explore</h2>
          </div>

          <div className='theme-images'>
            <div className='image1'>
              <img src={theme1}></img>
              <p>forest</p>
            </div>
            <div className='image1'>
              <img src={theme2}></img>
              <p>snow</p>
            </div>
            <div className='image1'>
              <img src={theme3}></img>
              <p>temples</p>
            </div>
            <div className='image1'>
              <img src={theme4}></img>
              <p>adventure</p>
            </div>
            <div className='image1'>
              <img src={theme5}></img>
              <p>beach</p>
            </div>
            
          </div>

        </div>

    </div>
  )
}

export default About