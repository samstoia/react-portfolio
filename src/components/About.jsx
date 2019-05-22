import React from "react";
import '../styles/About.css'
import newsImage from './../assets/images/news.jpg';
import mountains from './../assets/images/mountains.jpg';
import coding from "./../assets/images/coding.png"
import Navbar from './Navbar';

function About() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="about-grid">
        <div className="whatIDo">
          <div className="textBlock">
            <p>
              In short, I build stuff.  From my time at the Epicodus bootcamp in Seattle, I learned how to build dynamic we applications in JavaScript, C#, and TypeScript.  I've built using .NET Core, Angular, and React.  I've learned to create and manage a database using SQL, and use REST APIs.  My skills are literally growing from day to day.
            </p>
          </div>
          <div className="imgBlock">
            <h1>What I Do</h1>
            <img src={coding} alt="" />
          </div>


        </div>
        <div className="backstory">
          <div className="imgBlockRight">
            <h1>My Story</h1>
            <img src={newsImage} alt="" />
          </div>

          <div className="textBlockRight">
            <p>
              I cut my teeth in the world of journalism.  After spending nearly a decade as a news producer, I decided it was time to change up.  I never thought there would be a time that I would be standing in front of a white board discussing the time complexity of a recursive function, but here we are.  It's a good feeling.
            </p>
          </div>
        </div>
        <div className="otherStuff">
          <div className="imgBlock">
            <h1>The Other Stuff</h1>
            <img src={mountains} alt="" />
          </div>

          <div className="textBlock">
            <p>
              My other passions include hiking and mountaineering, firing up my smoker to bbq some meat, and writing.  I hope to one day find my way back to the world of journalism with my new skills in tech to help the industry stay relevant in this brave new world.
            </p>
          </div>

        </div>
      </div>

    </div>

  );
}

export default About;