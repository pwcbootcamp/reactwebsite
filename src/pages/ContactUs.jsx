import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section>
        <div>
          <h2 class="contactUs">Contact Us</h2>
        </div>

        <div class="contact">
          <div>
            <p>Email: ng_pwc.enquiry@pwc.com</p>
            <p>Phone: +234818 3524 765</p>
            <address>
              Head Office <br />
              Landmark Tower <br />
              5b Water Corporation Road <br />
              Victoria Island <br />
              P.O.Box 2419 <br />
              Lagos, Nigeria.
            </address>
          </div>
          <div>
            {/* <img style="margin: 10px 0;" src="images/pwcmap.png" width="400" height="400" alt="map"> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
