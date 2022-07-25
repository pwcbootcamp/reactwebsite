import React from 'react';
import node from "../images/logos/node.png";
import python from "../images/logos/python.png";
import cSharp from "../images/logos/csharp.png";
import php from "../images/logos/php.png";
import clojure from "../images/logos/clojure.png";
import ruby from "../images/logos/ruby.png";
import scala from "../images/logos/scala.png";

export const Home = () => {
  return (
      <div>
      <section className="container">
      <main className="hero">
        <section className="container">
            <h1>Welcome to PwC Tech Talent Bootcamp</h1>
            <p>Get the latest skill you need</p>
        </section>
    </main>
    

    <section className="content">
        <h2 className="container" id="learn">
            What You'll Learn
        </h2>

        <div className="container flex">
            <div className="card">
                <h4>Node.js</h4>
                <img src={node} alt="" />
            </div>
            <div className="card">
                <h4>Python</h4>
                <img src={python} alt="" />
            </div>
            <div className="card">
                <h4>CSharp</h4>
                <img src={cSharp} alt="" />
            </div>
            <div className="card">
                <h4>PHP</h4>
                <img src={php} alt="" />
            </div>
            <div className="card">
                <h4>Clojure</h4>
                <img src={clojure} alt="" />
            </div>
            <div className="card">
                <h4>Ruby</h4>
                <img src={ruby} alt="" />
            </div>
            <div className="card">
                <h4>Scala</h4>
                <img src={scala} alt="" />
            </div>
        </div>
    </section>
        
          
      </section>
    </div>
  )
}

export default Home;
