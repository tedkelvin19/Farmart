import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <Header />
      <div className="container">
        {cartItems.length === 0 ? (
          <div>
            <div className="bg-light mt-5 pt-4 pb-2 px-4">
              <p className="font-weight-bold">Your Cart Is Empty</p>
            </div>
            <div className="container mt-5 mb-5">
              <Link className="text-primary" to="/animal-list">
                <i className="bi bi-arrow-left"></i>Add Animals To Cart
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-5">
            <div className="row">
              {cartItems.map((item, index) => (
                <div key={index} className="col-md-12 mb-4">
                  <div className="card">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src={item.image_url}
                          alt={item.breed}
                          className="card-img"
                        />
                      </div>
                      <div className="col-md-4">
                        <div className="card-body">
                          <div>
                            <p>
                              <strong>Breed: </strong>
                              {item.breed}
                            </p>
                            <p>
                              <strong>Weight: </strong>
                              {item.weight}
                            </p>
                            <p>
                              <strong>Price: </strong>
                              Ksh {item.price}
                            </p>
                            <p>
                              <strong>Seller: </strong>
                              {item.farmer_username}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card-body d-flex flex-column justify-content-between">
                          <button className="btn btn-danger mb-3">
                            Remove From Cart
                          </button>
                          <button className="btn btn-success">Order Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="container mb-5">
              <Link className="text-primary" to="/animal-list">
                <i className="bi bi-arrow-left"></i>Shop Some More
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
