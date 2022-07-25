import React from "react";
import pic1 from "../images/ec.jpg";
import pic2 from "../images/ane.jpg";
import pic3 from "../images/banana.jfif";
import pic4 from "../images/dc-center-1.webp";
import pic5 from "../images/ecc.jpg";
import pic6 from "../images/ede.webp";
import pic7 from "../images/excenter.jpg";
import pic8 from "../images/office.jpg";
import pic9 from "../images/orange.avif";
import pic10 from "../images/pcwec.jpg";
import pic11 from "../images/PwC-Nigeria-Experience-Centre-brandspur-nigeria-3.webp";
import pic12 from "../images/PwC15.jpg";
import pic13 from "../images/workspace.webp";

const Gallery = () => {
  return (
    <section class="home-page main-content">
      <h2>PWC Gallery</h2>

      <div class="gallery-option">
        <div class="gallOpt" id="all">
          All
        </div>
        <div class="gallOpt" id="locations">
          Locations
        </div>
        <div class="gallOpt" id="projects">
          Projects
        </div>
        <div class="gallOpt" id="random">
          Random
        </div>
      </div>

      <div class="grid-container">
        <img src={pic1} class="gallery-image pwc" />

        <img src={pic2} class="gallery-image projects" />

        <img src={pic3} class="gallery-image Random" />

        <img src={pic4} class="gallery-image pwc" />

        <img src={pic5} class="gallery-image projects" />

        <img src={pic6} class="gallery-image Random" />

        <img src={pic7} class="gallery-image pwc" />

        <img src={pic8} class="gallery-image projects" />

        <img src={pic9} class="gallery-image Random" />

        <img src={pic10} class="gallery-image projects" />

        <img src={pic11} class="gallery-image Random" />

        <img src={pic12} class="gallery-image Random" />

        <img src={pic13} class="gallery-image Random" />
      </div>
    </section>
  );
};

export default Gallery;
