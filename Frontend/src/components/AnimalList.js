import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../pages/Header';
import AddToCart from "../components/AddToCart"

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    useEffect(() => {
      const fetchAnimals = async () => {
        try {
          const response = await axios.get(
            "https://farm-jqcq.onrender.com/farm/animals/"
          );
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
  
    return (
      <>
        <Header />
        <div className="container mt-5 animal-list">
          <h2 className="heading-2 mb-4 text-center">Buy From The Best</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mb-5">
            {animals.map((animal, index) => (
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
                      <strong>Productivity:</strong> {animal.productivity}
                    </p>
                    <p className="card-text">
                      <strong>Cost: </strong>Ksh {animal.price}
                    </p>
                    <div className="card-footer">
                      <div
                        className="btn btn-secondary"
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
        <footer>
          <div className="footer mt-auto py-3 bg-dark text-light my-footer">
            <div className="container">
              <p className="text-center">
                &copy; 2024 Farmart | All rights reserved.
              </p>
              <div className="text-center footer-socials">
                Follow Us On Our Socials ||
                <a href="www.facebook.com">Facebook</a>
                <a href="www.twitter.com">Twitter</a>
                <a href="www.youtube.com">Youtube</a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };

export default AnimalList