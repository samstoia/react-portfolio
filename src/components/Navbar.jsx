import React from 'react';
import '../styles/Navbar.css';
import { FaBars, FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <div>

      <div className="nav-container">
        <nav>
          <div className="left-menu">
            <FaBars />
            <input type="checkbox" id="nav-toggle" />
            <label htmlFor="nav-toggle" className="burger-menu">

            </label>
          </div>

          <div className="center-menu">
            <a href="/">Sam Stoia</a>
          </div>

          <div className="right-menu">
            <div className="iconDiv">
              <a href="https://github.com/samstoia"><FaGithubSquare /></a>
            </div>
            <div className="iconDiv">
              <a href="https://www.linkedin.com/in/samuel-stoia/"><FaLinkedin /></a>
            </div>
          </div>
        </nav>
      </div>


    </div>
  );
}

export default Navbar;

