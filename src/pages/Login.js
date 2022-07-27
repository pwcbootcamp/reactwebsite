import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert (`The name you entered was: ${username}`)
    if (username && password) {
      navigate("/");
    } else {
      alert("Enter username and password");
    }
  };
  return (
    <div className="loginContainer">
      <section className="formWrappper">
        <form id="myForm" onSubmit={handleSubmit}>
          <h1>Login Page</h1>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              id="username"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
            />
          </label>
          <input type="submit" className="btn" />
        </form>
      </section>
    </div>
  );
};

export default Login;
