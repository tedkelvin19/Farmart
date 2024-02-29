import React from "react";
import { Link } from "react-router-dom";
import "../cssModules/Header.css"



const Header = () => {
  return (
    <div className="header">
      <div className="container header">
        <div className="logo">FarmArt</div>
        <input className="search-bar" type="text" placeholder="Search" />
        <ul className="navbar-ul">
          <li className="navbar-links">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-links">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="navbar-links">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
