import React from 'react';
import './NavBar.css'; // Assuming you have a CSS file for styling
import logo from "../../assets/mosesfdo-main-logo.svg"

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className='logo'/>

      <div className="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Works</a></li>
          <li><a className='contact-link' href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;