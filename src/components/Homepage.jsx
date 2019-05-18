import React from 'react';
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import '../styles/Homepage.css';

function Homepage() {
  return (

    <div className="page-container">
      <div className="description">
        <h3>Developer.  Creator.</h3>
      </div>

      <div className="projects">
        <Link to="/projects">Projects Link</Link>
      </div>

      <div className="about">
        <Link to="/about">About Link</Link>
      </div>

      <div className="contact">
        <Link to="/contact">Contact Link</Link>
      </div>


    </div>
  );
}

export default Homepage;