import React from 'react';
import '../styles/Homepage.css';

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


    </div>
  );
}

export default Homepage;