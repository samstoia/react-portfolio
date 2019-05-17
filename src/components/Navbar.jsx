import React from 'react';
import '../styles/Navbar.css';
import { FaBars, FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <div>

      <div class="nav-container">
        <nav>
          <FaBars />
          <input type="checkbox" id="nav-toggle" />
          <label for="nav-toggle" class="burger-menu">

          </label>
          <div class="center-menu">
            <a class="logo">Sam Stoia</a>
          </div>

          <div class="right-menu">
            <FaGithubSquare />
            <FaLinkedin />
          </div>
        </nav>
      </div>


    </div>
  );
}

export default Navbar;

