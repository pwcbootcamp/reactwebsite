import React from "react";
import PwcLocation from "./pwclocation.png";

function Contactus() {
  return (
    <div>
      <h2>Contact Us</h2>
      <section className="container">
        <p className="text">
          <b>Email: </b> enquiry@ng.pwc.com
        </p>
        <p className="text">
          <b>Phone number: </b>08166213298
        </p>
        <p className="text">
          <b>Address: </b>Landmark Towers 5B, Water Corporation Road Victoria
          Island,Lagos
        </p>
        <img
          src={PwcLocation}
          alt=""
          width="400"
          height="400"
          className="center"
        />
      </section>
    </div>
  );
}

export default Contactus;
