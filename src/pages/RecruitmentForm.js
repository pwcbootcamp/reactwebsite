import React, { useState } from "react";

const RecruitmentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name);
    alert(`Name : ${name} , Age: ${age}`);
  };

  return (
    <div className="loginContainer">
      <section className="formWrappper">
        <form id="myForm" onSubmit={handleSubmit}>
          <label>
            Enter your name:
            <input
              type="text"
              name="username"
              id="username"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Enter your age:
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={handleAgeChange}
            />
          </label>
          <input type="submit" className="btn" />
        </form>
      </section>
    </div>
  );
};

export default RecruitmentForm;
