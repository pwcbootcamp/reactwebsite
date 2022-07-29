import React, { useState } from "react";

const RecruitmentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("my name is" + name, "age is" + age, "email is" + email);
  };

  return (
    <section className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={age || ""}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Enter your Email:
          <input
            type="text"
            name="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </section>
  );
};

export default RecruitmentForm;
