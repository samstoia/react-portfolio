import React from 'react';
import '../styles/Navbar.css';
import { FaBars, FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <div>

      <div className="nav-container">
        <nav>
          <FaBars />
          <input type="checkbox" id="nav-toggle" />
          <label htmlFor="nav-toggle" className="burger-menu">

          </label>
          <div className="center-menu">
            <a href="/">Sam Stoia</a>
          </div>

          <div className="right-menu">
            <FaGithubSquare />
            <FaLinkedin />
          </div>
        </nav>
      </div>


    </div>
  );
}

export default Navbar;

