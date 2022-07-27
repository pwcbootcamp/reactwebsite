import React, { useState } from "react";
import logo from "./images/pwc.jpeg";
import { Link } from "react-router-dom";

function Header() {
  const [dark, setDark] = useState(false);

  const handleMenu = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  };
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h1>PWC Student Website</h1>
      </div>
      <div>
        <Link to="/Home" className="active">
          Home
        </Link>{" "}
        |
        <Link to="/ContactUs" onClick={handleMenu}>
          {" "}
          Contact Us
        </Link>{" "}
        |
        <Link to="Gallery" onClick={handleMenu}>
          {" "}
          Gallery
        </Link>{" "}
        |
        <Link to="ApplicationForm" onClick={handleMenu}>
          {" "}
          ApplicationForm
        </Link>{" "}
        |
        <Link to="AboutUs" onClick={handleMenu}>
          {" "}
          About
        </Link>{" "}
        |
        <Link to="RecruitmentForm" onClick={handleMenu}>
          {" "}
          Recruitment
        </Link>{" "}
        |
        <Link to="Posts" onClick={handleMenu}>
          {" "}
          Post
        </Link>{" "}
        |
        <Link to="users" onClick={handleMenu}>
          {" "}
          Users
        </Link>{" "}
        |
        <Link to="todos" onClick={handleMenu}>
          {" "}
          Todos
        </Link>{" "}
        |
        <Link to="login" onClick={handleMenu}>
          {" "}
          Login
        </Link>{" "}
        |
      </div>
      <button
        id="mode"
        onClick={(e) => {
          document.body.classList.toggle("light");
          e.target.value = "light";
          setDark(!dark);
        }}
      >
        {dark ? "dark" : "light"} mode
      </button>
    </header>
  );
}

export default Header;
