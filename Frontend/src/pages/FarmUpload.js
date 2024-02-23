import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const FarmUpload = () => {
  const [category, setCategory] = useState("");
  const [breed, setBreed] = useState("");
  const [health, setHealth] = useState("");
  const [reproductiveHistory, setReproductiveHistory] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploading animal");


    const formData = {
      category,
      breed,
      health,
      reproductiveHistory,
      weight,
      age,
      imageUrl,
      cost,
      description,
    };

    try {

      axios
        .post("https://farm-jqcq.onrender.com/farm/animals/", formData)
        .then((response) => {
          console.log("Data sent successfully:", response.data);

        })
        .catch((error) => {
          console.error("Error sending data:", error);

        });
    } catch (error) {
      console.error("Error sending data:", error);

    }
  };

  return (
    <>
      <Header />
      <div className="mt-5">
        <h5 className="text-center">Add an animal to your sales pen</h5>
        <div className="container ">
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
                    <option value="Cattle">Cattle</option>
                    <option value="Swine">Swine</option>
                    <option value="Poultry">Poultry</option>
                    <option value="Sheep & Goats">Sheep & Goats</option>
                  </select>

                  <input
                    type="text"
                    className="form-control mb-3"
                    name="breed"
                    placeholder="Breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="health"
                    placeholder="Health"
                    value={health}
                    onChange={(e) => setHealth(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="reproductiveHistory"
                    placeholder="Reproductive history"
                    value={reproductiveHistory}
                    onChange={(e) => setReproductiveHistory(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="maincard">
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="weight"
                    placeholder="Weight (Kgs)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="age"
                    placeholder="Age e.g 1 day, 2 wks, 4 yrs"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                  <input
                    type="text"
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
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Upload
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FarmUpload;
