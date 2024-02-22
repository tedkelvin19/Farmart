import React from 'react'
<<<<<<< HEAD:Frontend/src/components/ProductDetail/productDetail.jsx
import './productDetail.css'
=======
import "./ProductDetail.css"
>>>>>>> 0efd330 (update signup/sign/in):Frontend/src/components/ProductDetail/ProductDetail.jsx

const productDetail = () => {
  return (
    <div>
      
    <div id='body'> 
      <div id='header'>
        <h1>Animal Details</h1>
        </div>
      <div id='main'>
        

        <div id='image-block'>
          <img id='image'  src='https://www.for-sale.co.uk/sh-img/1200px-Hausziege_04_goats.jpg' alt='product-img'></img>
        </div>

        <div id='text-block'>
         <h3>Summary</h3>
          <p>Breed:</p>
          <p>Age:</p>
          <p>Health:</p>
          <p>Reproductive History:</p>
          <p>Genetic Background:</p>
          <p>Temparement:</p>
          <p>Productivity:</p>
          <p>Weight:</p>
          <p>Cost:$</p>
        </div>

        <div id='more-animal'>
        <h2>More about this animal</h2>
        <p>This Holstein cow, at 4 years old, represents the pinnacle of dairy farming excellence.  With a rich genetic background tracing 
        back to purebred Holstein lineage, she embodies the ideal combination of robust health, high fertility, and exceptional milk 
        production. Vaccinated and in good condition, she has a history of regular calving and demonstrates high productivity with her 
        impressive milk yield. With a docile temperament, she is easy to handle, making her a valuable addition to any dairy operation. 
        Weighing approximately 1,200 pounds, she is well-suited for various management systems. 

        Priced at $2,500, she offers a sound investment opportunity for farmers seeking to enhance their herd's genetic potential and 
        increase milk production efficiency.</p>
        </div>

        <div id='buttons-block'>
        <button id='addtolist'>Add to Buy list</button>
        <button id='goback'>Go back</button>
        </div>
      </div>

    </div>
    </div>
    
  )
}

export default productDetail
