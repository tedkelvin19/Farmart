import React from 'react'
import Header from 'src/components/Header/Header.jsx'
const FarmUpload = () => {
  return (
    <div>
    <Header />
    <div id='container'>
      
      
      
    <div id='main'>
      <div id='header'>
      <h1>My Buy List</h1>
    </div>
    </div>
      <div id='total-price'>
        <h3>Total Payable: 6,900</h3>
      </div>
      <div id='product-list'>
  <div id='image-block'>
  <img id='product-img' src='https://th.bing.com/th/id/OIP.jNrm4XKi51vHf1D-yAjB0QHaHa?w=1440&h=1440&rs=1&pid=ImgDetMain' alt='product img'></img>
  <div id='product-definition'>
    <p>Breed.Holstein(Dairy)</p>
    <p>Productivity:High milk...</p>
    <p>Health:Vaccinated,good...</p>
  </div>
  </div>
  <div id='remove-from-list'>
    <p>
      Cost: $2,300
    </p>
    <button>Remove from list</button>
  </div>
</div>
<div id='product-list'>
  <div id='image-block-2'>
  <img id='product-img' src='https://th.bing.com/th/id/OIP.jNrm4XKi51vHf1D-yAjB0QHaHa?w=1440&h=1440&rs=1&pid=ImgDetMain' alt='product img'></img>
  <div id='product-definition'>
    <p>Breed.Holstein(Dairy)</p>
    <p>Productivity:High milk...</p>
    <p>Health:Vaccinated,good...</p>
  </div>
  <div id='remove-from-list-2'>
    <p>
      Cost: $2,300
    </p>
    <button>Remove from list</button>
  </div>
  </div>
  
</div>
<div id='product-list'>
<div id='image-block-3'>
  <img id='product-img' src='https://th.bing.com/th/id/OIP.jNrm4XKi51vHf1D-yAjB0QHaHa?w=1440&h=1440&rs=1&pid=ImgDetMain' alt='product img'></img>
  </div>
  <div id='product-definition-3'>
    <p>Breed.Holstein(Dairy)</p>
    <p>Productivity:High milk...</p>
    <p>Health:Vaccinated,good...</p>
  </div>
  <div id='remove-from-list-3'>
    <p>
      Cost: $2,300
    </p>
    <button>Remove from list</button>
  </div>
</div>
<button id='place-order'>Place your order</button>
    </div>
   
    </div>
    </div>
  )
}

export default FarmUpload