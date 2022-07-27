import React from "react";

const Application = () => {
  return (
    <section class="home-page main-content">
      <h2>Application Form</h2>

      <div class="form-wrapper">
        <form id="my-form">
          <div class="msg"></div>
          <label>First name</label>
          <input type="text" id="firstName" />
          <label>Second name</label>
          <input type="text" id="secondName" />
          <label>State</label>

          <select id="state" class="selectstate">
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
          <div class="genderopt">
            <div class="maleopt">
              <label for="male" class="optlabel">
                Male
              </label>
              <input type="radio" id="male" name="gender" value="Male" />
            </div>
            <div class="maleopt">
              <label for="female" class="optlabel">
                Female
              </label>
              <input type="radio" id="female" name="gender" value="Female" />
            </div>
          </div>

          <label>Selected Courses</label>
          <div class="maleopt">
            <input
              type="checkbox"
              class="courses selectopt"
              name="courses"
              id="js"
              value="Javascript"
            />
            <label for="js">Javascript</label>
          </div>
          <div class="maleopt">
            <input
              type="checkbox"
              class="courses selectopt"
              name="courses"
              id="ds"
              value="Data Science"
            />
            <label for="ds">Data Science</label>
          </div>
          <div class="maleopt">
            <input
              type="checkbox"
              class="courses selectopt"
              name="courses"
              id="py"
              value="Python"
            />
            <label for="py">Python</label>
          </div>
          <div class="maleopt">
            <input
              type="checkbox"
              class="courses selectopt"
              name="courses"
              id="cs"
              value="C Sharp"
            />
            <label for="cs">C#</label>
          </div>
          <div class="maleopt">
            <input
              type="checkbox"
              class="courses selectopt"
              name="courses"
              id="fe"
              value="Frontend"
            />
            <label for="fe">Frontend</label>
          </div>
          <button type="submit" class="btn">
            Submit
          </button>
        </form>
      </div>

      <div class="tablesection"></div>
    </section>
  );
};

export default Application;
