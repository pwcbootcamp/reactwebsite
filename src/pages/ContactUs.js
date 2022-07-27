import React from 'react'

function ContactUs() {
  return (
    <div>
        <section>
      <div>
        <div class="conimage">
          <div class="cont">
            <h1 style={{ textAlign: "center " }}>CONTACT PAGE</h1>
            <p style={{ fontStyle: "italic", fontWeight: "lighter" }}>
              Please help us to deal with your comments as efficiently as
              possible by supplying the following details. <br />
              Adding your question or comment under the subject.
            </p>
            <div id="space">
              <div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Email:</span>
                  <span>my_info@pwc.com</span>
                </p>
              </div>
              <div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Phone Number:</span>
                  <span>[+234] (1) 2711700, 2703101</span>
                </p>
              </div>
              <div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Address</span>
                  <span>
                    Landmark Towers 5B, Water Corporation Road Victoria
                    Island,Lagos
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-containers">
        <form id="my-form">
          <label>First name</label>
          <input type="text" id="name" />
          <label>Email</label>
          <input type="text" id="email" />
          <label>Phone Number</label>
          <input type="number" id="number" />
          <label for="questions">Questions/Comments</label>
          <textarea
            name="message"
            rows="10"
            cols="50"
            style={{ paddingBottom: "5px" }}
          ></textarea>
          <button type="submit" class="btn">
            Submit
          </button>
        </form>

        <div class="cover">
          <p style={{ paddingBottom: "10px", fontWeight: "bold" }}>
            Navigate to our Location:
          </p>
          <div class="mapouter">
            <div class="gmap_canvas">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="600"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=PWC%20Landmark%20Towers%205B,%20Water%20Corporation%20Road%20Victoria%20Island%20Lagos%20Nigeria%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    title="map"
                  ></iframe>
                  <a href="https://www.whatismyip-address.com/divi-discount/">
                    divi discount
                  </a>
                  <br />

                  <a href="https://www.embedgooglemap.net">
                    location map for website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ContactUs