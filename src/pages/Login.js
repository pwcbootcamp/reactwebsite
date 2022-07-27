import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/");
    } else {
      alert("Enter email and password");
    }
  };

  return (
    <div className="container">
      <section id="formWrappper">
        <form id="myForm" onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="text"
              name="password"
              id="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </label>
          <input type="submit" className="btn" />
        </form>
      </section>
    </div>
  );
};

export default Login;
