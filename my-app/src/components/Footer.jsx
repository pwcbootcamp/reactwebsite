import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/PricewaterhouseCoopers_Logo.png';
import pic1 from "../images/pwcpics1.jpeg";
import pic2 from "../images/pwcpics2.jpeg";
import pic3 from "../images/pwcpics3.jpeg";
import pic4 from "../images/pwcpics4.jpeg";
import pic5 from "../images/pwcpics1.jpeg";
import pic6 from "../images/pwcpics1.jpeg";



const Footer = () => {
  return (
      <div>
          <footer>
          <div className="container">
            <div>
                <div className="logo">
                    <img src={logo} alt="" width="40px" height="40px" />
                </div>
                <h1>PwC Tech Bootcamp</h1>

                <nav>
                <ul className="main-menu">
                <li>
                  <Link to="/home">Home</Link> |
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link> |
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link> |
                </li>
                
                <li>
                <Link to="/application">Apply Now</Link>
                </li>
            </ul>
                </nav>
                
            </div>

            <div className="gallery">
                <div className="gallery-item"><img src={pic1} alt="" /></div>
                <div className="gallery-item"><img src={pic2} alt="" /></div>
                <div className="gallery-item"><img src={pic3} alt="" /></div>
                <div className="gallery-item"><img src={pic4} alt="" /></div>
                <div className="gallery-item"><img src={pic5} alt="" /></div>
                <div className="gallery-item"><img src={pic6} alt="" /></div>
            </div>

            <div className="social">
                <p>Follow us on</p>
                
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
        </div>  
        <hr />
        <p id="copy">Copyright &copy; 2022</p>
        </footer>
    </div>
  )
}

export default Footer