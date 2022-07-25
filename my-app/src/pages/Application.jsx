import React from 'react'

const Application = () => {
  return (
      <div>
          <section className="app-info">
    <h2>Apply to Join the Group!</h2>
    <p>
      Apply to join the bootcamp. 
      At the academy, we not only concerned with teaching your coding skills, we awill also be teaching you interpersonal
      and communication skills.
    </p>
  </section>

  <section className="form-container">
    <form id= "my-form">
      <h3>Application Form</h3>
      <div>
        <label for="name">Name:*</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label for="email">Email:*</label>
        <input type="text" id="email" required />
      </div>
      <div>
        <label for="track">Track:*</label>
        <select name="track" id="track" required>
          <option value="">Select a track</option>
          <option value="fullstack">Fullstack</option>
          <option value="backEnd">BackEnd</option>
          <option value="frontEnd">FrontEnd</option>
          <option value="uiux">UI/UX</option>
          <option value="other">Other</option>
        </select>
        <label for="other-track">Other:</label>
        <input type="text" name="other" id="other-track" />
      </div>
      <input className="btn" type="submit" value="Submit" />
      <div className="msg"></div>
    </form>   
  </section>

  <section>
    <h3>Our Clients</h3>
    <div>
      <table id="submitted-details">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Track</th>
        </tr>
      </table>

    </div>
  </section>
    </div>
  )
}

export default Application