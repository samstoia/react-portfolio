import React from 'react';
import '../styles/Navbar.css';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Sidebar from './Sidebar';

function Navbar() {
  return (
    <div>
      <div className="nav-container">
        <nav>
          <div className="left-menu">
            <Sidebar />
          </div>

          <div className="center-menu">
            <a href="/">Sam Stoia's Portfolio</a>
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

