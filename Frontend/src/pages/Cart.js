// cart.js
import "../cssModules/Cart.css"
import React from "react"; // Undo to
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartActions";
import Header from "./Header";
import Footer from "./Footer";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (animalId) => {
    dispatch(removeFromCart(animalId));
  };

  return (
    <>
      <Header />
      <div className="container main-div">
        <h2 className="mt-5">MyCart</h2>
        {cartItems.length === 0 ? (
          <div>
            <div className="bg-light pt-4 pb-2 px-4">
              <p>Your Cart Is Empty</p>
            </div>
            <div className="container mt-5 mb-5">
              <Link className="text-primary" to="/animal-list">
                <i className="bi bi-arrow-left"></i>Add Animals To Cart
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="row">
              {cartItems.map((item, index) => (
                <div key={index} className="col-md-12 mb-4 cart-div">
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
                          <button
                            className="btn btn-danger mb-3 mt-4"
                            onClick={() => handleRemoveFromCart(item.id)}
                          >
                            Remove From Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="container mb-5 order-section">
              <Link className="mt-4" to="/animal-list">
                <i className="bi bi-arrow-left"></i>Shop Some More
              </Link>
              <Link to="/check-out">
                <button className="btn mt-3 sign-button text-light">Order All</button>
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
