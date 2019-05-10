import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';


function Homepage() {
  return (
    <div>
      <Navbar />
      Homepage Works
      <Link to="/about">About Link</Link>
      <Link to="/projects">Projects Link</Link>
    </div>
  );
}

export default Homepage;