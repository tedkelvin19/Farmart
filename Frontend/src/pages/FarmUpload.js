import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import "../cssModules/FarmUpload.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const FarmUpload = () => {
  const [category, setCategory] = useState("");
  const [breed, setBreed] = useState("");
  const [health, setHealth] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [image_url, setImage_url] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const [farmer, setFarmer] = useState();
  // const [reproductiveHistory, setReproductiveHistory] = useState("");

  useEffect(() => {
    // Retrieve cookie value
    const cookieValue = Cookies.get("jwt");
    setFarmer(jwtDecode(cookieValue).id);
  }, []);

  // console.log(token);
  // console.log(farmer)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploading animal");

    const animal = {
      category,
      breed,
      // health,
      // reproductiveHistory,
      weight,
      age,
      image_url,
      cost,
      description,
      farmer,
    };
    console.log(animal);
    try {
      axios
        .post("https://farm-jqcq.onrender.com/farm/animals/", animal)
        .then((response) => {
          console.log("Data sent successfully with status", response.status);
          // clear fields if upload is successsful
          if (response.status === 201) {
            alert("Your data has been uploaded successfully");
            setCategory("");
            setBreed("");
            setHealth("");
            // setReproductiveHistory("");
            setWeight("");
            setAge("");
            setImage_url("");
            setCost("");
            setDescription("");
          }
        });
    } catch (error) {
      console.error("Error sending data:", error);
    }

   
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-4 bg-light pt-3 pb-2 animal-form mx-auto">
          <h5 className="text-center">
            View, Approve or Reject Ordrers{" "}
            <button className="btn upload-btn">
              <Link to="/farm-orders">Here</Link>
            </button>
          </h5>
        </div>
        <div className="container mt-5 pt-4 bg-light animal-form">
          <h5 className="upload-heading text-center mb-4">
            Upload Animal For Sale
          </h5>
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="maincard">
                    <select
                      className="form-select mb-3"
                      name="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Category</option>
                      <option value="3">Cattle</option>
                      <option value="2">Swine</option>
                      <option value="1">Poultry</option>
                      {/* <option value="">Sheep & Goats</option> */}
                    </select>

                    <input
                      type="text"
                      className="form-control mb-3"
                      name="breed"
                      placeholder="Breed"
                      value={breed}
                      onChange={(e) => setBreed(e.target.value)}
                    />

                    {/* <input
                      type="text"
                      className="form-control mb-3"
                      name="health"
                      placeholder="Health"
                      value={health}
                      onChange={(e) => setHealth(e.target.value)}
                    /> */}
                    {/* <input
                      type="text"
                      className="form-control mb-3"
                      name="reproductiveHistory"
                      placeholder="Reproductive history"
                      value={reproductiveHistory}
                      onChange={(e) => setReproductiveHistory(e.target.value)}
                    /> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="maincard">
                    <input
                      type="number"
                      className="form-control mb-3"
                      name="weight"
                      placeholder="Weight (Kgs)"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                    <input
                      type="number"
                      className="form-control mb-3"
                      name="age"
                      placeholder="Age in months"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                      type="text"
                      className="form-control mb-3"
                      name="imageUrl"
                      placeholder="Image URL"
                      value={image_url}
                      onChange={(e) => setImage_url(e.target.value)}
                    />
                    <input
                      type="number"
                      className="form-control mb-3"
                      name="cost"
                      placeholder="Cost in Ksh"
                      value={cost}
                      onChange={(e) => setCost(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <textarea
                    className="form-control mb-3"
                    name="description"
                    placeholder="Describe your animal in about 150 words"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button type="submit" className="btn upload-btn mb-5 mt-2">
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FarmUpload;
