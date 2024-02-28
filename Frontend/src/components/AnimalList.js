<<<<<<< HEAD
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../pages/Header";
import AddToCart from "../components/AddToCart";
import "../cssModules/Animalist.css";

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchBreed, setSearchBreed] = useState("");
  const [searchParam] = useState(["breed", "category"]);
  const [ageFilter, setAgeFilter] = useState("asc");
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get("https://farm-jqcq.onrender.com/farm/animals/");
        setAnimals(response.data);
      } catch (error) {
        console.error("Error fetching animals:", error);
      }
    };

    fetchAnimals();
  }, []);

  const openModal = (animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAnimal(null);
    setIsModalOpen(false);
  };
  const filteredAnimals = () => {
    const filtered = animals.filter((animal)=> {
      return searchParam.some((newAnimal)=>{
        return (
          animal[newAnimal].toString().toLowerCase().indexOf(searchBreed.toLowerCase()) > -1
        )
      })
    });
  
=======
import React, { useState } from "react";
import Header from "../pages/Header";
import { useFetchAllproductsQuery } from "../features/animalsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/carts/cartSlice";
import "../cssModules/Animalist.css";

const AnimalList = () => {
  const { data: products, isLoading, isError } = useFetchAllproductsQuery() || {};
  const [ageFilter, setAgeFilter] = useState("asc");
  const [searchParam] = useState(["breed", "category"]);
  const [searchBreed, setSearchBreed] = useState("");

  const dispatch = useDispatch();

  const addToCartHandler = async (product) => {
    dispatch(addToCart({ product, qty: 1 }));
  };

  const filteredAnimals = () => {
    if (!products) return []; // Check if products is null or undefined

    const filtered = products.filter((animal) => {
      return searchParam.some((newAnimal) => {
        return (
          animal[newAnimal]
            .toString()
            .toLowerCase()
            .indexOf(searchBreed.toLowerCase()) > -1
        );
      });
    });

>>>>>>> development
    if (ageFilter === "asc") {
      return filtered.sort((a, b) => a.age - b.age);
    } else {
      return filtered.sort((a, b) => b.age - a.age);
    }
  };
<<<<<<< HEAD
  return (
    <>
      <Header />
      <div className="container mt-5 animal-list">
        <h2 className="heading-2 mb-4 text-center">Buy From The Best</h2>
        <div className="container mb-2">
          <Link className="text-primary" to="/cart">
            My Cart
          </Link>
        </div>
        <div className="filter-container">
          <div className="filterbybreed">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder="search by breed"
                value={searchBreed}
                onChange={(e) => setSearchBreed(e.target.value)}
              /><br/>
            </div>
          </form>
          </div>
          <div className="filterbyage">
          <select className="form-select" value={ageFilter} onChange={(e) => setAgeFilter(e.target.value)}>
              <option value="asc">Age Ascending</option>
              <option value="desc">Age Descending</option>
          </select>
          </div>  
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mb-5">
          {filteredAnimals(animals).map((animal, index) => (
            <div key={index} className="col">
              <div className="card">
                <div className="img-div">
                  <img
                    className="card-img card-img-top img-fluid"
                    src={animal.image_url}
                    alt={animal.category}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{animal.category}</strong>
                  </h5>
                  <p className="card-text">
                    <strong>Breed:</strong> {animal.breed}
                  </p>
                  <p className="card-text">
                    <strong>Animal age:</strong> {animal.age}
                  </p>
                  <p className="card-text">
                    <strong>Cost: </strong>Ksh {animal.price}
                  </p>
                  <div className="card-footer">
                    <div
                      className="btn sign-button text-light"
                      onClick={() => openModal(animal)}
                    >
                      More Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <AddToCart
        isOpen={isModalOpen}
        onClose={closeModal}
        animal={selectedAnimal}
      />
=======

  return (
    <>
      <Header />
      <div className="shop p-3">
        <h2 className="shopTitle">Farmat</h2>
        <div className="filter-container">
          <div className="filterbybreed">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  placeholder="search by breed"
                  value={searchBreed}
                  onChange={(e) => setSearchBreed(e.target.value)}
                />
                <br />
              </div>
            </form>
          </div>
          <div className="filterbyage">
            <select
              className="form-select"
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value)}
            >
              <option value="asc">Age Ascending</option>
              <option value="desc">Age Descending</option>
            </select>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error fetching data</div>
          ) : (
            filteredAnimals().map((product) => (
              <div className="col" key={product.id}>
                <div className="card">
                  <div className="img-div">
                    <img
                      className="card-img card-img-top img-fluid"
                      src={product.image_url}
                      alt={product.category}
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      <strong>Breed:</strong> {product.breed}
                    </p>
                    <p className="card-text">
                      <strong>Location: </strong>
                      {product.location}
                    </p>
                    <p className="card-text">
                      <strong>Age: </strong>
                      {product.age} months
                    </p>
                    <p className="card-text">
                      <strong>Cost: </strong>Ksh {product.price}
                    </p>
                  </div>
                  <div className='title'>
                    <button className='addToCartBttn' onClick={() => addToCartHandler(product)}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))
          )}
          </div>
        </div>
      </div>
>>>>>>> development
    </>
  );
};

<<<<<<< HEAD
=======

>>>>>>> development
export default AnimalList;
