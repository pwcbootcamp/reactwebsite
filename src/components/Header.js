import React from "react";

import { Link } from "react-router-dom";
import Photo from "./pwc.jpeg";

const Header = () => {
  return (
    <header>
      <div>
        <img src={Photo} alt="" width="40" height="40" />
      </div>
      <div>
        <h3>PwC Career Website</h3>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contactUs">Contact Us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/applicationForm">Application Form</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/studentsData">Students Data</Link>
        <Link to="/Posts">Posts</Link>
      </div>
    </header>
  );
};

export default Header;
