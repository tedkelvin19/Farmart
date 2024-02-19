import React from 'react'
import Header from 'src/components/Header/Header.jsx'
const FarmUpload = () => {
  return (
    <div>
      <Header />
      <div>
    
    <div id = 'main'>

<div className= 'maincard'>
  <div id = 'header'>
<h1>Add an animal to your sales pen</h1>
 </div>
 <select id="Category">
<option value='Category'>Category</option>
<option value="Monogastric">Monogastric Animals</option>
<option value="Ruminants">Ruminants Animals</option>
<option value="Dairy">Dairy animals</option>
<option value="Poultry">Poultry animals</option>
</select>

<select id="Genetic-Background">
<option value='Genetic Background'>Genetic Background</option>
<option value="Angus">Angus Cattle</option>
<option value="Poultry">Poultry animals</option>
<option value="Hampshire">Hampshire Pigs</option>
<option value="Leghorn">Leghorn Chickens</option>
</select>
    </div>
  )
}

export default FarmUpload