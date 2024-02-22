import React from "react";

const MyCart = ({ cartItems }) => {
  return (
    <div>
      <h2>My Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.category} - Ksh {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCart;
