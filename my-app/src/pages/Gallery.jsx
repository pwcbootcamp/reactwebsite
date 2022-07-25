import React from 'react'

import pic1 from "../images/pwcpics1.jpeg";
import pic2 from "../images/pwcpics2.jpeg";
import pic3 from "../images/pwcpics3.jpeg";
import pic4 from "../images/pwcpics4.jpeg";

const Gallery = () => {
  return (
      <div>
              <main>
        <h2>Our People, Our Culture!</h2>

        <section className="content">
            <div className="content-gallery">
                <div className="content-item"><img src={pic1} alt="" /></div>
                <div className="content-item"><img src={pic2} alt="" /></div>
                <div className="content-item"><img src={pic3} alt="" /></div>
                <div className="content-item"><img src={pic4} alt="" /></div>
                <div className="content-item"><img src={pic4} alt="" /></div>
                <div className="content-item"><img src={pic3} alt="" /></div>
                <div className="content-item"><img src={pic2} alt="" /></div>
                <div className="content-item"><img src={pic1} alt="" /></div>
                <div className="content-item"><img src={pic2} alt="" /></div>
                <div className="content-item"><img src={pic3} alt="" /></div>
                <div className="content-item"><img src={pic4} alt="" /></div>
                <div className="content-item"><img src={pic3} alt="" /></div>
            </div>
        </section>

    </main>

    </div>
  )
}

export default Gallery