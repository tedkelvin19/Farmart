import React, { useEffect, useState } from 'react';
import "../App.css";
import SideBar from './SideBar';
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useCreateProductsMutation } from '../features/animalsApi';
import axios from 'axios';

const Dashboard = () => {

    const [createProducts, isLoading, isError] = useCreateProductsMutation() || {}

    const [category, setCategory] = useState("");
    const [breed, setBreed] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [image_url, setImage_url] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [quantity, setQuatity] = useState("");
    const [description, setDescription] = useState("");
    const [farmer, setFarmer] = useState();
    const [animals, setAnimals] = useState([]);

        useEffect(() => {
        // Retrieve cookie value
        const cookieValue = Cookies.get("jwt");
        setFarmer(jwtDecode(cookieValue).id);

        const fetchAnimals = async () => {
            try {
                // Make a GET request to your API endpoint to fetch animals
                const response = await axios.get('http://127.0.0.1:8000/farm/animals_filter/', {
                    headers: {
                        'Authorization': `Bearer ${cookieValue}`,
                    }
                }); // Replace '/api/animals' with your actual API endpoint
                setAnimals(response.data);
            } catch (error) {
                console.error('Error fetching animals:', error);
            }
        };

        fetchAnimals();
      }, []);

      console.log(animals)


      const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log("Uploading animal");

        try { await createProducts({
            category,
            breed,
            weight,
            quantity,
            age,
            image_url,
            price,
            location,
            description,
            farmer,
        })
        // Clear form fields
        setBreed('');
        setImage_url('');
        setCategory('');
        setPrice('');
        setWeight('');
        setQuatity('');
        setAge('') ;
        setLocation('');
        setDescription('');
        } catch (error) {
          console.error("Error sending data:", error);
        }
      };

  return (
    <div>
        <SideBar/>
        <main role="main" className="container">
            <div className="p-1">
                <h3>Welcome</h3>
                <p>Upload Animal or view your Orders Here.</p>
            </div>
        <div className="row">
          <div className="col-md-7">
            <form className="row g-3 papa">
                <div className="col-12">
                    <label htmlFor="inputBreed" className="form-label">Breed</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="breed" 
                    value={breed} onChange={(e) => setBreed(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Weight</label>
                    <input type="number" className="form-control" id="inputWeight" placeholder="weight" 
                    value={weight} onChange={(e) => setWeight(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Age</label>
                    <input type="number" className="form-control" id="inputAddress2" placeholder="Age" 
                    value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Price</label>
                    <input type="number" className="form-control" id="inputAddress" placeholder="amount" 
                    value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Quantity</label>
                    <input type="number" className="form-control" id="inputQuantity" placeholder="quantity" 
                    value={quantity} onChange={(e) => setQuatity(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Location</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="location" 
                    value={location} onChange={(e) => setLocation(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Add Image Url</label>
                    <input type="text" className="form-control mb-3" name="imageUrl" placeholder="Image URL"
                    value={image_url}
                    onChange={(e) => setImage_url(e.target.value)}/>
                </div>
                <div className="col-12">
                <select className="form-select mb-3" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                      <option >Category</option>
                      <option value="2">Cattle</option>
                      <option value="3">Swine</option>
                      <option value="1">Poultry</option>
                      <option value="4">Sheep</option>
                </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Upload</button>
                </div>
            </form>
          </div>
          <div className="col-md-5 ">
            <div className="content-section m-2">
              <h3>My Orders</h3>
              <p className='text-muted'>Shows orders received.
                <ul className="list-group">
                  <li className="list-group-item list-group-item-light">Latest Posts</li>
                  <li className="list-group-item list-group-item-light">Announcements</li>
                  <li className="list-group-item list-group-item-light">Calendars</li>
                  <li className="list-group-item list-group-item-light">etc</li>
                </ul>
              </p>
            </div>
            <div className="content-section m-2">
              <h3>Animal Posted</h3>
              <p className='text-muted'>Shows animals posted.
                <ul className="list-group">
                {animals.map(animal => (
                    <li key={animal.id} className="list-group-item list-group-item-light">{animal.breed}</li>
                ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard