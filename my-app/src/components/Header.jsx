import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/PricewaterhouseCoopers_Logo.png';

const Header = () => {
  return (
      <div>
          {/* <header>
        <h1>Interactive website</h1>
        <Link to="/home">Home</Link> |
        <Link to="/contact">Contact Us</Link> |
        <Link to="/application">Apply Now</Link> |
        <Link to="/about">About Us</Link>
      </header> */}

      <header>
      <div className="logo">
            <img src={logo} alt="" width="50px" height="50px" />
        </div>
        <h1>PwC Website</h1>
    
        <nav>
        <ul className="main-menu">
                <li>
                  <Link to="/home">Home</Link> |
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link> |
                </li>
                <li>
                  <Link to="/about">About Us</Link> |
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link> |
                </li>
                
                <li>
                <Link to="/application">Apply Now</Link>
                </li>
                <li className="dark-light-box">
                    <div className="dark-light">
                        <i className='bx bx-moon moon'></i>
                        <i className='bx bx-sun sun'></i>
                    </div>
                </li>
            </ul>
          </nav>
      </header>


      

      </div>

  )
}

export default Header