<<<<<<< HEAD
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
=======
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotalAmount, clearAllCart, removeItem } from '../features/carts/cartSlice';
import "../cssModules/Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state?.carts);
  const { cartTotalAmount }= useSelector(state => state?.carts)

  // empty the cart 
  const handleClearCart = () => {
    dispatch(clearAllCart());
  };

  // remove the cart
  const handleRemoveFromCart = (product) => {
    dispatch(removeItem(product));
  };

  // calculate subtotal each time the cart item changes
  useEffect(() => {
    dispatch(calculateTotalAmount())
  }, [cartItems, dispatch])


  return (
    <div className="cart-container">
    <h2>Animal Cart</h2>
    {cartItems.length === 0 ? (
      <div className="cart-empty">
        <p>Your cart is currently empty</p>
        <div className="start-shopping">
          <Link to="/animal-list">
          <FaArrowLeft />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    ) : (
      <div>
        
        <div className="cart-items">
          {cartItems &&
            cartItems.map((cartItem) => (
              <div className="cart-item" key={cartItem?.product?.id}>
                <div className="cart-product">
                  <img src={cartItem?.product?.image_url} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem?.product?.breed}</h3>
  
                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem?.product?.price}</div>
                <div className="cart-product-quantity">
                  <button >
                    
                  </button>
                  <div className="count">1</div>
                  <button></button>
                </div>
                <div className="cart-product-total-price">
                  ${cartItem?.product?.price * cartItem.qty}
                </div>
              </div>
            ))}
        </div>
        <div className="cart-summary">
          <button className="clear-btn" onClick={() => handleClearCart()}>
            Clear Cart
          </button>
          <div className="cart-checkout">
            <div className="subtotal">
              <span>Subtotal</span>
              <span className="amount">${cartTotalAmount}</span>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <Link to="/checkout" className="btn btn-secondary">checkout</Link>
            <div className="continue-shopping">
              <Link to="/animal-list">  
              <FaArrowLeft />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default Cart

>>>>>>> development
