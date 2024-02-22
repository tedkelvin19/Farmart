import "../cssModules/SignIn.css";
import axios from "axios";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let user = {
        username,
        password,
        role,
      };

      let endpoint;
      if (role === "User") {
        endpoint = "https://farm-jqcq.onrender.com/farm/customers/";
      } else endpoint = "https://farm-jqcq.onrender.com/farm/farmers/";

      Response = axios.post(endpoint, user);
      if (Response.status === "200") {
        console.log("Sign in successful");
       

        if (role === "User") {
          Navigate("/animal-list");
        } else {
          Navigate("/farm-upload");
        }
      } else {
        alert("Problem signing in");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center vh-90 sign-in-form">
        <div className="container card mt-5 mb-5">
          <h2 className="text-center mt-3">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                required
                className="form-control"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="role">Your Role</label>
              <select
                className="form-control"
                id="role"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
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
