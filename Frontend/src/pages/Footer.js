import React from "react";
import "../cssModules/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer mt-auto py-3 bg-dark text-light my-footer">
        <div className="container">
          <p className="text-center">
            &copy; {currentYear} Farmart | All rights reserved.
          </p>
          <div className="text-center footer-socials">
            Follow Us On Our Socials ||
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.twitter.com">Twitter</a>
            <a href="https://www.youtube.com">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
