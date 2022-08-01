import React, { useState } from "react";

const CareerForm = () => {
  const [inputs, setInputs] = useState({});
  const [displayData, setDisplayData] = useState([]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setDisplayData((values) => [...values, inputs]);
  };
  const reverseDisplayData = displayData.reverse();
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
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your age:
            <input
              type="number"
              name="age"
              id="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </label>
          <input type="submit" className="btn" />
        </form>
        {reverseDisplayData.map((item, index) => (
          <div key={index}>
            {" "}
            {item.username} {item.age}{" "}
          </div>
        ))}
      </section>
    </div>
  );
};

export default CareerForm;
