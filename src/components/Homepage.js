import React from 'react';
import { Link } from "react-router-dom";


function Homepage() {
  return (
    <div>
      Homepage Works
      <Link to="/about">About Link</Link>
      <Link to="/projects">Projects Link</Link>
    </div>
  );
}

export default Homepage;