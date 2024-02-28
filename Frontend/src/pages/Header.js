import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import "../cssModules/Header.css"



const Header = () => {
=======
import { Link, useNavigate } from "react-router-dom";
import "../cssModules/Header.css";
import Cookies from "js-cookie";
import { ShoppingCart } from "phosphor-react";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const token = Cookies.get("jwt");
  const { cartItems } = useSelector((state) => state?.carts);
  

  const handleClick = () => {
    // Remove the JWT token cookie
    Cookies.remove("jwt");

    // Check if the cookie is successfully removed
    if (!Cookies.get("jwt")) {
      // Navigate to the home route
      navigate("/");
    }
  };

>>>>>>> development
  return (
    <div className="header">
      <div className="container header">
        <div className="logo">FarmArt</div>
<<<<<<< HEAD
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
=======
        <div className="end">
          {token ? (
            <div>
              <Link to="/about-us">About Us</Link>
              <Link to="/cart">
                <ShoppingCart size={24}></ShoppingCart>
                ({cartItems?.length})
              </Link>
              <Link to="/contact"> Contact </Link>
              <Link to="/logout"> Logout </Link>
            </div>
          ) : (
            <div>
              <Link to="/">Home</Link>
              <Link to="/sign-in"> Login </Link>
              <Link to="/sign-up"> Signup </Link>
            </div>
          )}
        </div>
>>>>>>> development
      </div>
    </div>
  );
};

export default Header;