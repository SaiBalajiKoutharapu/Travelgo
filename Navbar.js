import React, { Component } from 'react'
import "./NavbarStyles.css"
import  NavbarMenuItems from './NavbarMenuItems'
import { Link } from 'react-router-dom';



class Navbar extends Component {
  state ={clicked :false}
    handleclick = () => {
      this.setState ({clicked : !this.state.clicked})
    }
  render() {
    
    return (
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>TravelGO<i class="fa-solid fa-plane-departure"></i></h1>

        <div className='menu-icons' onClick={this.handleclick} >
          <i className={this.state.clicked ? "fa-sharp fa-solid fa-xmark": "fa-solid fa-bars"}></i>
        </div>
        
        <ul className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}>
          {
            NavbarMenuItems.map((items ,index) => {
              return (
                <li key={index} >
                <Link className={items.cName} to={items.url} >
                  <i className={items.icon}></i>
                  {items.title}
                </Link>
                </li>
              )
              
            })
          }
          <a href="/Login" ><button className='button'>SignUp</button></a>
        </ul>
        
      </nav>
    )
  }
}

export default Navbar