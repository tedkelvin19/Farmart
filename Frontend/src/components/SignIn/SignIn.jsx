import "./SignIn.css";
import axios from "axios";
import Cookies from "js-cookie";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let user = {
        email,
        password,
      };
        console.log(user)
      const response = await axios.post(
        "https://farm-jqcq.onrender.com/farm/login/",
        user
      );


      const { jwt, role } = response.data;
      console.log(jwt)

      
      Cookies.set('jwt', jwt)
            window.alert("Login successful")
            // Redirect user to corresponding dashboard based on role
            if (role === 'patient') {
              window.location.href = '/farm-upload';
            } else if (role === 'admin') {
              window.location.href = '/admin-dashboard';
            } else if (role === 'doctor') {
              window.location.href = '/animal-list';
            }
    } catch (error) {
      console.error("Error signing in:", error);
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
              <label htmlFor="email">Email</label>
              <input
                type="text"
                required
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            {/* <div className="form-group mt-4">
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
            </div> */}
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

