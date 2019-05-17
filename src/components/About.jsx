import React from "react";
import '../styles/About.css'
import newsImage from './../assets/images/news.jpg';
import mountains from './../assets/images/mountains.jpg';
import coding from "./../assets/images/coding.png"

function About() {
  return (
    <div className="page-wrapper">

      <div className="about-grid">
        <div className="whatIDo">

          <div className="textBlock">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, similique hic? Quasi dolor ad earum repellat, alias ducimus voluptatum a nam odio, quis cum. Dicta libero quaerat aliquam. Porro, voluptate obcaecati. Veniam quia alias animi nihil accusantium veritatis in nesciunt?
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, similique hic? Quasi dolor ad earum repellat, alias ducimus voluptatum a nam odio, quis cum. Dicta libero quaerat aliquam. Porro, voluptate obcaecati. Veniam quia alias animi nihil accusantium veritatis in nesciunt?
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, similique hic? Quasi dolor ad earum repellat, alias ducimus voluptatum a nam odio, quis cum. Dicta libero quaerat aliquam. Porro, voluptate obcaecati. Veniam quia alias animi nihil accusantium veritatis in nesciunt?
            </p>
          </div>

        </div>
      </div>

    </div>

  );
}

export default About;