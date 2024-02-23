// cart.js

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
// import Footer from "./Footer"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <Header />
      <div className="container mt-5">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <h1 className="text-center mb-4">My Cart</h1>
            <div className="row">
              {cartItems.map((item, index) => (
                <div key={index} className="col-md-12 mb-3">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src={item.image_url}
                          className="card-img-top"
                          alt={item.breed}
                          style={{ maxHeight: "200px", objectFit: "cover" }}
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <p className="card-text"><strong>Breed: </strong>{item.breed}</p>
                          <p className="card-text"><strong>Weight: </strong>{item.weight}</p>
                          <p className="card-text"><strong>Price: </strong>{item.price}</p>
                          <p className="card-text"><strong>Seller: </strong>{item.farmer_username}</p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex flex-column align-items-center justify-content-center">
                        <button className="btn btn-primary mb-2"><i className="bi bi-trash"></i></button>
                        <button className="btn btn-primary">Place Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="container">
        <Link to="/animal-list" className="btn btn-secondary mb-5">Back To Animals</Link>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Cart;
