import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      navigate("/Home");
    } else {
      alert("Please enter your Username and password");
    }
  };
  return (
    <section className="container">
      <h2>Login</h2>
      <form class="login" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
          />
        </div>
        <div>
          <input type="submit" id="submit" />
        </div>
      </form>
    </section>
  );
}

export default Login;
