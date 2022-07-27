import React, { useState } from "react";

const RecruitmentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const ageChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Welcome, ${name}, you are ${age} years old`);
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="my-form">
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={name || ""}
            onChange={nameChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={age || ""}
            onChange={ageChange}
          />
        </label>
        <input type="submit" className="btn" />
      </form>
    </div>
  );
};

export default RecruitmentForm;
