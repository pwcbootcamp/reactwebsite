import React, { useState } from "react";

const RecruitmentForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const [inputValue, setInputValue] = useState({ initialState });
  const [errorCheck, setErrorCheck] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    setErrorCheck(validateInput(inputValue));
    // setSuccess(true);
  };

  const validateInput = (values) => {
    let error = {};
    if (!values.username) {
      error.username = "Username is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!values.email.includes("@")) {
      error.email = "Email is not a valid email";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 6 || values.password.length > 20) {
      error.password = "Password length must be between 6 and 20 characters";
    }

    if (Object.keys(error).length === 0) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    return error;
  };
  return (
    <div>
      <h2
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        Recruitment Form
      </h2>
      <div className="loginContainer">
        <section className="formWrappper">
          <form id="myForm" onSubmit={handleSubmit}>
            {success && (
              <div
                style={{
                  background: "green",
                  padding: "20px",
                  marginBottom: "20px",
                  borderRadius: "4px",
                }}
              >
                <p>Registration successful!</p>
              </div>
            )}

            <div>
              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Sarah Obasi"
                  value={inputValue.username}
                  onChange={handleChange}
                />
              </label>
              <p className="error">{errorCheck.username}</p>
            </div>
            <div>
              <label htmlFor="email">
                Email:
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="sarahrichie08@gmail.com"
                  value={inputValue.email}
                  onChange={handleChange}
                />
              </label>
              <p className="error">{errorCheck.email}</p>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <input
                  type="text"
                  name="password"
                  placeholder="********"
                  id="password"
                  value={inputValue.password}
                  onChange={handleChange}
                />
              </label>
              <p className="error">{errorCheck.password}</p>
            </div>

            <input type="submit" className="btn" />
          </form>
        </section>
      </div>
    </div>
  );
};

export default RecruitmentForm;
