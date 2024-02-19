import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SignIn = () => {
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center vh-90 sign-in-form">
        <div className="container card mt-5 mb-5">
          <h2 className="text-center mt-3">Sign In</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="role">Your Role</label>
              <select className="form-control" id="role">
                <option>Buyer</option>
                <option>Farmer</option>
              </select>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary mt-4 sign-button"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-3 mb-5 text-center">
            Don't have an account? <Link to="/sign-up"> Sign up here</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
