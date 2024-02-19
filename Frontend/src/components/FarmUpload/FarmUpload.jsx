import React from 'react'
import Header from 'src/components/Header/Header.jsx'

const FarmUpload = () => {
  return (
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
  
<div id='input-section'>
<ul className = 'no-bullets'>
<li><input id = 'boxes' type ='text' placeholder = 'Breed'></input></li>
<li><input id = 'boxes' type ='text' placeholder = 'Health'></input></li>
<li><input id = 'boxes' type ='text' placeholder = 'Reproductive history'></input></li>
<li><input id = 'boxes' type ='text' placeholder = 'Age'></input></li>
</ul>

<ul className = 'no-bullets'>
<li><input id = 'boxes' type ='text' placeholder = 'Weight (Kgs)'></input></li>
<li><input id = 'boxes' type ='text' placeholder = 'Image URL'></input></li>
<li><input id = 'boxes' type ='text' placeholder = 'Temperament'></input></li>
<li><input id = 'boxes' type ='text' placeholder = 'Cost'></input></li>
</ul>
</div>
<textarea id = 'description' placeholder = 'Describe your animal in less than 150 words' rows ='4' cols ='48'></textarea>
<button id = 'Upload'>Upload</button>
</div>
</div>
</div>
  )
}

export default FarmUpload