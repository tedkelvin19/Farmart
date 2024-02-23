// cart.js

import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <div className="container mt-5">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index}>
                <p>{item.breed}</p>
                <p>{item.age}</p>
                <p>{item.cost}</p>
                <p>{item.seller}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
