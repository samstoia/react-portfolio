import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';

function Homepage() {
  return (
    <div>
      Homepage Works
      <Link to="/about">About Link</Link>
      <Link to="/projects">Projects Link</Link>
      <Link to="/contact">Contact Link</Link>
    </div>
  );
}

export default Homepage;