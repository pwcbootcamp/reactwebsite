import React from 'react';

import pic1 from "../images/pwcpics1.jpeg";
import pic2 from "../images/pwcpics2.jpeg";
import pic3 from "../images/pwcpics3.jpeg";
import pic4 from "../images/pwcpics4.jpeg";

const About = () => {
  return (
    <div>
          <div className="wrapper"></div>
      <div className="about-section">
        <p>Some text about who we are and what we do.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quae excepturi exercitationem accusamus, ducimus ipsa suscipit incidunt consectetur minus autem, commodi ad vel esse corporis. Nostrum libero totam reiciendis optio?.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt est eius iure enim assumenda in harum incidunt mollitia corrupti adipisci alias possimus laborum, officiis, iste dicta officia labore velit.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt est eius iure enim assumenda in harum incidunt mollitia corrupti adipisci alias possimus laborum, officiis, iste dicta officia labore velit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt est eius iure enim assumenda in harum incidunt mollitia corrupti adipisci alias possimus laborum, officiis, iste dicta officia labore velit.</p>
      </div>
      <section className="content-container">
      <h1><u>Our Team</u></h1>
        <div className="column">
            <div className="card">
                <p><img src={pic1} alt="John" /></p>
                <div className="info">
                    <h2>Jackie Chan</h2>
                    <p className="title"><strong>Web Developer</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt aperiam natus repellendus corrupti velit pariatur fugiat itaque inventore eveniet.</p>
                    <p><strong>example@gmail.com</strong></p>
                    <button className="btn"><a href="/contact.html">Conatct me</a></button>
                </div>
            </div>
            <div className="card">
                <p><img src={pic2} alt="John" /></p>
                <div className="info">
                    <h2>Princess Chan</h2>
                    <p className="title"><strong>Software Developer</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt aperiam natus repellendus corrupti velit pariatur fugiat itaque inventore eveniet.</p>
                    <p><strong>example@gmail.com</strong></p>
                    <button className="btn"><a href="/contact.html">Conatct me</a></button>
                </div>
            </div>
            <div className="card">
                <p><img src={pic3} alt="John" /></p>
                <div className="info">
                    <h2>Oluwakemi Adeola</h2>
                    <p className="title"><strong>Backend Developer</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt aperiam natus repellendus corrupti velit pariatur fugiat itaque inventore eveniet.</p>
                    <p><strong>example@gmail.com</strong></p>
                    <button className="btn"><a href="/contact.html">Conatct me</a></button>
                </div>
            </div>
            <div className="card">
                <p><img src={pic4} alt="rachel" /></p>
                <div className="info">
                    <h2>Rachel Myers</h2>
                    <p className="title"><strong>Fullstack Developer</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt aperiam natus repellendus corrupti velit pariatur fugiat itaque inventore eveniet.</p>
                    <p><strong>example@gmail.com</strong></p>
                    <button className="btn"><a href="/contact.html">Conatct me</a></button>
                </div>
            </div>
        </div> 
        </section>
    </div>
  )
}

export default About