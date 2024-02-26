import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const CheckOut = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  return (
    <>
      <Header />
      <div className="container d-flex sign-in-form">
        <div className="container card mt-5 mb-5">
          <h2 className="text-center mb-3 mt-3">Payment Details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Name</label>
              <input
                type="text"
                required
                className="form-control"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="phoneNO">Phone Number</label>
              <input
                type="text"
                required
                className="form-control"
                id="phoneNo"
                placeholder="Your Safaricom Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary mt-4 sign-button"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mt-3 mb-5 text-dark">
            <Link to="/Cart">
              <i className="bi bi-arrow-left"></i>Back To Cart
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
