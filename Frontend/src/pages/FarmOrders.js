import "../cssModules/Farmorders.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const FarmOrders = () => {
  const [animals, setAnimals] = useState([]);
  const [uploadedAnimals, setUploadedAnimals] = useState([]);

  useEffect(() => {
    // Fetch uploaded animals
    axios
      .get("http://localhost:8000/animals")
      .then((response) => {
        setUploadedAnimals(response.data);
        console.log("Uploaded animals fetched successfully", uploadedAnimals);
      })
      .catch((error) => {
        console.error("Could not fetch uploaded animals", error);
      });

    // Fetch data for animals
    axios
      .get("http://localhost:8000/animals")
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [uploadedAnimals]);

  return (
    <>
      <Header />
      <div className="container main-div">
        <div className="row">
          {uploadedAnimals.length === 0 ? (
            <div className="col-md-12 pb-2 pt-4 mt-5 bg-light">
              <p>No animals posted. Post an animal to sell.</p>
              <Link
                to="/farm-upload"
                className="text-decoration-none text-primary"
              >
                <p>
                  <i className="bi bi-arrow-left"></i>Back To Upload
                </p>
              </Link>
            </div>
          ) : (
            <div className="mt-5">
              <h2 className="section-heading text-center">
                You Have Posted {animals.length} Animals
              </h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mb-5">
                {uploadedAnimals.map((animal, index) => (
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <br />
        </div>
        <div className="row">
          {animals.length === 0 ? (
            <div className="col-md-12 pb-2 pt-4 mb-5 bg-light">
              <p>No Orders Today. Please Check Later</p>
              <Link
                to="/farm-upload"
                className="text-decoration-none text-primary"
              >
                <p>
                  <i className="bi bi-arrow-left"></i>Back To Upload
                </p>
              </Link>
            </div>
          ) : (
            <div className="container">
              {" "}
              {/* Wrap the orders div in a container */}
              <div className="row justify-content-center">
                {" "}
                {/* Use Bootstrap's justify-content-center class */}
                <div className="col-lg-8">
                  {" "}
                  {/* Use col-lg-8 to specify the width of the orders div */}
                  <div className="orders-div">
                    <h2 className="section-heading text-center">
                      You Have Received {animals.length} Orders
                    </h2>
                    {animals.map((animal) => (
                      <div className="col-md-12 mb-5">
                        <div key={animal.id} className="card">
                          <div className="row no-gutters">
                            <div className="col-md-4">
                              <img
                                src={animal.image_url}
                                className="card-img"
                                alt="Animal"
                              />
                            </div>
                            <div className="col-md-5">
                              <div className="card-body">
                                <h5 className="card-title">
                                  Breed - {animal.breed}
                                </h5>
                                <p className="card-text">
                                  <strong>Health:</strong> {animal.health}
                                  <br />
                                  <strong>Reproductive History:</strong>{" "}
                                  {animal.reproductiveHistory}
                                  <br />
                                  <strong>Weight:</strong> {animal.weight} Kgs
                                  <br />
                                  <strong>Cost:</strong> Ksh {animal.price}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3 d-flex flex-column justify-content-between">
                              <button className="btn btn-success mt-5 mx-4">
                                Accept
                              </button>
                              <button className="btn btn-danger mb-5 mx-4">
                                Reject
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FarmOrders;
