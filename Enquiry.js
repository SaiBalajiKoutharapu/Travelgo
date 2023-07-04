import React from 'react'
import './EnquiryStyles.css'
function Enquiry() {
  return (
    <div className='enquiry'>

        <div className='main-form'>

            <div className='top-head'>
                <h2>fill the form</h2>
            </div>

            <div className='form'>
                <label>first name</label>
                <input type='text'></input>

                <label>last Name</label>
                <input type='text'></input>

                <label>email id</label>
                <input type='text'></input>

                <label>contact number</label>
                <input type='text'></input>

                <label>no of persons</label>
                <input type='text'></input>
            
                <label>destination</label>
                <input type='text'></input>

            </div>

            <div className='button1'>
                <button>submit</button>
            </div>

        </div>
    </div>
  )
}

export default Enquiry