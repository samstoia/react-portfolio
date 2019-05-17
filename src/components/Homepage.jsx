import React from 'react';
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import '../styles/Homepage.css';

function Homepage() {
  return (

    <div className="hero-image">

      <div >
        Homepage Works
        <Link to="/about">About Link</Link>
        <Link to="/projects">Projects Link</Link>
        <Link to="/contact">Contact Link</Link>
      </div>

    </div>
  );
}

export default Homepage;