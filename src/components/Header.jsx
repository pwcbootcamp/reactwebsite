import React from "react";
import logo from "../images/logo.webp";
import toggleButton from "../images/WhatsApp Image 2022-07-22 at 1.24.01 PM.jpeg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <div class="logo-section">
          <img src={logo} alt="" class="logo" />
          <h3>Interactive Website</h3>
        </div>
        <div class="navigation">
          <nav id="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About </Link>
            <Link to="/contact">Contact</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/application">Application</Link>
            <Link to="/students-data">Students Data</Link>
          </nav>
        </div>
        <div>
          <button id="dark-mode">
            <img src={toggleButton} alt="" />
          </button>
        </div>
      </header>
    </div>
  );
}
