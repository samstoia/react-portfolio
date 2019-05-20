import React from 'react';
import '../styles/Homepage.css';
import { FaInstagram, FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Homepage() {
  return (

    <div className="page-container">
      <div className="description">
        <h2>Developer.  Creator.</h2>
      </div>

      <a className="projects" href="/projects">
        <div >
          Projects
        </div>
      </a>

      <a className="about" href="/about">
        <div>
          About
        </div>
      </a>

      <a className="contact" href="/contact">
        <div>
          Contact
        </div>
      </a>

      <div className="social">
        <div className="socialDiv">
          <a href="https://github.com/samstoia"><FaGithubSquare /></a>
        </div>
        <div className="socialDiv">
          <a href="https://www.linkedin.com/in/samuel-stoia/"><FaLinkedin /></a>
        </div>
        <div className="socialDiv">
          <a href="https://www.instagram.com/samstoia/"><FaInstagram /></a>
        </div>

      </div>



    </div>
  );
}

export default Homepage;