import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar';
import './LoginStyles.css';
import Info from './Info';

function Login() {
  return (

    <>
    <div className='main'>
        <div className='login-box'>
            <div className='content'>
                <div className='matter'>
                    <h2><span>welcome</span><br/>back</h2>
                    <h1>TravelGo</h1>
                    <p>we here serving the world more than 10yrs and  
                    the best travel experience
                    considering your all needs and budget friendly
                    with cool customer service
                    </p>
                    <label>click here to explore our packages</label>
                    <a href="/PlanTrip" ><button>explore</button></a>
                </div>
            </div>

            <div className='login'>
                <div className='login-reg'>
                    <h4>Login/SignUp</h4>
                    <div className='username'>
                        <label>username</label>
                        <FontAwesomeIcon className="icon" icon={faUser} /><br/><input type="text" ></input><br/>
                    </div>
                    <div className='username'>
                        <label>password</label>
                        <FontAwesomeIcon className="icon" icon={faLock} /><br/><input type="password" ></input><br/>
                    </div>
                    <div className='submit'>
                        <a href="/" ><button>Login</button></a>
                    </div>
                    <div className='register'>
                        <p>Not a user ?</p><a href="/">register here</a>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>

        <Navbar/>
        
    </div>
    <Info/>
    </>
  )
}

export default Login