import React from "react";
import logo from "./images/logo.webp";
import button from "./images/WhatsApp Image 2022-07-22 at 1.24.01 PM.jpeg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <div className="logo-section">
          <img src={logo} alt="" className="logo" />
          <h3>Interactive Website</h3>
        </div>
        <div className="navigation">
          <nav id="nav">
            <Link to="/">Home</Link>
            <Link to="/about-us">About </Link>
            <Link to="/contact-us">Contact</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/application-form">Application</Link>
            <Link to="/students-data">Students Data</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/recruitment-form">Recruitment</Link>
            <Link to="/users">Users</Link>
            <Link to="/todos">Todo List</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>
        <div>
          <button id="dark-mode">
            <img src={button} alt="" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
