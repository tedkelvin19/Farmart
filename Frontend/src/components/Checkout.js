<<<<<<< HEAD
import React, { useState } from 'react';

const Checkout = () => {
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }
=======
import React, { useEffect, useState } from "react";
import "../cssModules/checkout.css";
import saf from "../assets/mpesa.png";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import OrderItems from "./OrderItems";


const Checkout = () => {
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState('');
  const [street, setStreet] = useState("");

  const txt = JSON.parse(localStorage.getItem("cartItems"));
  //   console.log(txt[0].product.price)
  let price = String(txt[0].product.price);
  let total_price = String(txt[0].product.price);
  let animal = String(txt[0].product.id);
  let quantity = String(txt[0].qty);
  const amount = Math.round(price);

  const postCart = async () => {
   
    fetch("http://127.0.0.1:8000/farm/cart/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        animal,
        quantity,
        user,
        total_price,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("Error:", error));

}

  useEffect(() => {
    // Retrieve cookie value
    const cookieValue = Cookies.get("jwt");
    setUser(jwtDecode(cookieValue).id);
  }, []);
>>>>>>> development

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
<<<<<<< HEAD
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>City</label>
        <input type="text" value={city} onChange={handleCityChange} />
      </div>
      <div>
        <label>Address</label>
        <input type="text" value={address} onChange={handleAddressChange} />
      </div>
      <div>
        <label>Phone Number</label>
        <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
      </div>
      <div>
        <label>Amount</label>
        <input type="text" value={amount} onChange={handleAmountChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Checkout;
=======
    postCart();
    daraja();
  };

  const daraja = () => {
    fetch("http://127.0.0.1:8000/farm/stk/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        phoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div className="container p-0 checkout-body">
        <div className="m-3 arrow">
            <Link className="" to="/cart"><IoMdArrowBack /></Link>
            <label className="p-3">Place your order</label>
        </div>
        <div className="row">
          <div className="col-md-6 gepetto">
          <OrderItems/>
          </div>
          <div className=" col-md-6">
          <div className="card px-4">
          <p className="h8 py-3">Payment Details</p>
          <div className="row gx-3">
            <div class="col-md-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">City</p>
                <input className="form-control mb-3" type="text" placeholder="city"
                value={city} onChange={(e) => setCity(e.target.value)}/>
              </div>
            </div>
            <div class="col-md-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">Street</p>
                <input className="form-control mb-3" type="text" placeholder="street"
                value={street} onChange={(e) => setStreet(e.target.value)}/>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Address</p>
                <input className="form-control mb-3" type="text" placeholder="1234 Main St"
                value={address} onChange={e => setAddress(e.target.value)}/>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-2">Mpesa only</p>
                <img className="mpesa mb-2" src={saf} alt="mpesa" />
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Phone Number</p>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="2547XXXXXXXX"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1"> Total Amount</p>
                <p className="form-control mb-3 p-3">{price}</p>
              </div>
            </div>

            <div className="col-12">
              <div className="btn btn-primary mb-3" onClick={handleSubmit}>
                <span className="ps-3">Pay ({price})</span>
                <span className="fas fa-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
>>>>>>> development
