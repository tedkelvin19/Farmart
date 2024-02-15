import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404: Oops! Page Not Found!</h1>
      <p>
        <Link to="/">Click me</Link> to go back home
      </p>
    </div>
  );
};

export default NotFound;
