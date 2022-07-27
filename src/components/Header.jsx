import React from "react";
import logo from "../images/logo.webp";
import toggleButton from "../images/WhatsApp Image 2022-07-22 at 1.24.01 PM.jpeg";
import { Link } from "react-router-dom";
import Counter from "./Counter";

export default function Header() {
  return (
    <div>
      <header>
        <div className="logo-section">
          <img src={logo} alt="" class="logo" />
          <h3>Interactive Website</h3>
        </div>
        <div className="navigation">
          <nav id="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About </Link>
            <Link to="/contact">Contact</Link>
            <Link to="/gallery">Gallery</Link>
            {/* <Link to="/application">Apply</Link>
            <Link to="/students-data">Students Data</Link>*/}
            <Link to="/recruitment">Recruitment</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/todos">Todos</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>
        <div>
          {/* <button id="dark-mode">
            <img src={toggleButton} alt="" />
          </button> */}
          {/* <Counter /> */}
        </div>
      </header>
    </div>
  );
}
