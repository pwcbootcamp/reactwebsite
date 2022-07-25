import React from "react";

export default function Home() {
  return (
    <section className="container">
      <div>
        <div className="hero-section">
          <p>
            Learn how to build Interactive websites. Get to learn from
            professionals
          </p>
          <button href="#">Apply Now</button>
        </div>
        <div class="training-tracks">
          <h1>Training Tracks</h1>
          <div class="training-track-row">
            <div class="training-track-card">
              <h2>Fullstack Software Engineering</h2>
              <p>React,.Net, C#</p>
            </div>
            <div class="training-track-card">
              <h2>Agile product management</h2>
              <p>React,.Net, C#</p>
            </div>
            <div class="training-track-card">
              <h2>Data science/DB management</h2>
              <p>React,.Net, C#</p>
            </div>
          </div>
          <div class="training-track-row">
            <div class="training-track-card">
              <h2>Devops/ deployment management</h2>
              <p>React,.Net, C#</p>
            </div>
            <div class="training-track-card">
              <h2>Internet of things (IoT)</h2>
              <p>React,.Net, C#</p>
            </div>
            <div class="training-track-card">
              <h2>Design thinking & agile dev</h2>
              <p>React,.Net, C#</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
