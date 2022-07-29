import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [userpassword, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username && userpassword) {
      navigate("/");
    } else {
      alert("Enter username and password");
    }
  };

  return (
    <section className="container">
      <form id="my-form" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password </label>
        <input
          type="text"
          name="password"
          value={userpassword}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div>
          <input className="btn" type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
