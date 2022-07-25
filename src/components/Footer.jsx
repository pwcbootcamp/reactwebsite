import React from "react";
import logo from "../images/logo.webp";
import { Link } from "react-router-dom";

export default function Footer() {
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
            or more of its member firms, each of which
            <br />
            is a separate legal entity.
          </p>
        </div>
        <div class="navigation">
          <h4 style={{ textAlign: "left" }}>Links</h4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About </Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div
          class="navigation"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "25px",
          }}
        >
          <nav>
            <Link to="/gallery">Gallery</Link>
            <Link to="/application">Application</Link>
            <Link to="/students-data">Students Data</Link>
          </nav>
        </div>
        <div className="contact">
          <h4>Contact Information</h4>
          <p style={{ paddingTop: "5px" }}>
            <b>Email:</b> ng_pwc.enquiry@pwc.com
          </p>
          <p>
            <b>Phone Number:</b> 08084571513
          </p>
          <p>
            <b>Address:</b> 5B Water Corporation Road, Victoria Island
          </p>
        </div>
        <div className="socials">
          <h4>Social Media Links</h4>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
