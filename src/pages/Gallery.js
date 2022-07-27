import React from "react";
import image1 from "./img/ec.jpg";
import image2 from "./img/ane.jpg";
import image3 from "./img/banana.jfif";
import image4 from "./img/dc-center-1.webp";
import image5 from "./img/ecc.jpg";
import image6 from "./img/ede.webp";
import image7 from "./img/excenter.jpg";
import image8 from "./img/office.jpg";
import image9 from "./img/orange.avif";
import image10 from "./img/pcwec.jpg";
import image11 from "./img/PwC-Nigeria-Experience-Centre-brandspur-nigeria-3.webp";
import image12 from "./img/PwC15.jpg";
import image13 from "./img/workspace.webp";

function Gallery() {
  return (
    <div>
      <section className="home-page main-content">
        <h2>PWC Gallery</h2>

        <div className="gallery-option">
          <div className="gallOpt" id="all">
            All
          </div>
          <div className="gallOpt" id="locations">
            Locations
          </div>
          <div className="gallOpt" id="projects">
            Projects
          </div>
          <div className="gallOpt" id="random">
            Random
          </div>
        </div>

        <div className="grid-container">
          <img src={image1} className="gallery-image pwc" alt="" />

          <img src={image2} className="gallery-image projects" alt="" />

          <img src={image3} className="gallery-image Random" alt="" />

          <img src={image4} className="gallery-image pwc" alt="" />

          <img src={image5} className="gallery-image projects" alt="" />

          <img src={image6} className="gallery-image Random" alt="" />

          <img src={image7} className="gallery-image pwc" alt="" />

          <img src={image8} className="gallery-image projects" alt="" />

          <img src={image9} className="gallery-image Random" alt="" />

          <img src={image10} className="gallery-image projects" alt="" />

          <img src={image11} className="gallery-image Random" alt="" />

          <img src={image12} className="gallery-image Random" alt="" />

          <img src={image13} className="gallery-image Random" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Gallery;
