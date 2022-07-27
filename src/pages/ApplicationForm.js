import React from "react";

function ApplicationForm() {
  return (
    <div>
      <section className="home-page main-content">
        <h2>Application Form</h2>

        <div className="form-wrapper">
          <form className="my-form">
            <div className="msg"></div>
            <label>First name</label>
            <input type="text" id="firstName" />
            <label>Second name</label>
            <input type="text" id="secondName" />
            <label>State</label>

            <select id="state" className="selectstate">
              <option>Abia</option>
              <option>Adamawa</option>
              <option>Akwa-ibom</option>
              <option>Anambra</option>
              <option>Bauchi</option>
              <option>Bayelsa</option>
              <option>Benue</option>
              <option>Borno</option>
            </select>
            <label>Age</label>
            <input type="number" id="age" />
            <label>Gender</label>
            <div className="genderopt">
              <div className="maleopt">
                <label for="male" className="optlabel">
                  Male
                </label>
                <input type="radio" id="male" name="gender" value="Male" />
              </div>
              <div className="maleopt">
                <label for="female" className="optlabel">
                  Female
                </label>
                <input type="radio" id="female" name="gender" value="Female" />
              </div>
            </div>

            <label>Selected Courses</label>
            <div className="maleopt">
              <input
                type="checkbox"
                className="courses selectopt"
                name="courses"
                id="js"
                value="Javascript"
              />
              <label for="js">Javascript</label>
            </div>
            <div className="maleopt">
              <input
                type="checkbox"
                className="courses selectopt"
                name="courses"
                id="ds"
                value="Data Science"
              />
              <label for="ds">Data Science</label>
            </div>
            <div className="maleopt">
              <input
                type="checkbox"
                className="courses selectopt"
                name="courses"
                id="py"
                value="Python"
              />
              <label for="py">Python</label>
            </div>
            <div className="maleopt">
              <input
                type="checkbox"
                className="courses selectopt"
                name="courses"
                id="cs"
                value="C Sharp"
              />
              <label for="cs">C#</label>
            </div>
            <div className="maleopt">
              <input
                type="checkbox"
                className="courses selectopt"
                name="courses"
                id="fe"
                value="Frontend"
              />
              <label for="fe">Frontend</label>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>

        <div className="tablesection"></div>
      </section>
    </div>
  );
}

export default ApplicationForm;
