import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import about from "../images/about.jpg";
export default function About() {
  return (
    <div>
      <section className="about-container">
        <h1>About Us</h1>
        <div className="about-content">
          <div className="about-text">
            <span>
              Building trust in society and solving important problems
            </span>
            <p>
              With offices in 156 countries and more than 295,000 people, we are
              among the leading professional services networks in the world. We
              help organisations and individuals create the value they are
              looking for, by delivering quality in Assurance, Tax and Advisory
              services. Some facts about PwC:
              <br />
              - In FY21, PwC firms provided services to 84% of the Global
              Fortune 500 companies <br />
              - 90,273 people joined PwC firms around the world in FY21 <br />-
              For the year ending 30 June 2021, PwC’s gross revenues were US$45
              billion.
            </p>
          </div>
          <div>
            <img src={about} alt="" className="about-image" />
          </div>
        </div>
      </section>
    </div>
  );
}
