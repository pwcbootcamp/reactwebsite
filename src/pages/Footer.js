import React from 'react'
import logo from "./images/logo.webp"

function Footer() {
  return (
    <div>
        <footer>
        <div className="logo-section">
          <div className="footer-logo">
            <img src={logo} alt="" class="logo" />
            <h3>Interactive Website</h3>
          </div>
  
          <p>
            PwC refers to the PwC network and/or one <br />
            or more of its member firms, each of which<br />
            is a separate legal entity.
          </p>
        </div>
        <div className="navigation">
          <h4 style={{textAlign : "left"}}>Links</h4>
          <nav>
            <a href="index.html">Home</a>
            <a href="src/pages/about-us.html">About </a>
            <a href="src/pages/contact-us.html">Contact</a>
          </nav>
        </div>
        <div
          className="navigation"
          style={{display : "flex", justifyContent : "flex-end", paddingTop : "25px"}}
        >
          <nav>
            <a href="src/pages/gallery.html">Gallery</a>
            <a href="src/pages/application/application.html">Application</a>
            <a href="src/pages/students-data.html">Students Data</a>
          </nav>
        </div>
        <div className="contact">
          <h4>Contact Information</h4>
          <p style={{paddingTop :"5px"}}><b>Email:</b> ng_pwc.enquiry@pwc.com</p>
          <p><b>Phone Number:</b> 08084571513</p>
          <p><b>Address:</b> 5B Water Corporation Road, Victoria Island</p>
        </div>
        <div className="socials">
          <h4>Social Media Links</h4>
          <ul>
            <li><a href="https://twitter.com/home">Twitter</a></li>
            <li><a href="https://twitter.com/home">LinkedIn</a></li>
            <li><a href="https://twitter.com/home">Instagram</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer