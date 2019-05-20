import '../styles/Sidebar.css';
import React from "react";
import { slide as Menu } from "react-burger-menu";


export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/projects">
        Projects
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>

      <a className="menu-item" href="/about">
        About
      </a>
    </Menu>
  );
};