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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
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