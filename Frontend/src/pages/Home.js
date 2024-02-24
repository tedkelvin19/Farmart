import "../cssModules/Home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const currentYear = new Date().getFullYear();
const Home = () => {
  const [marketData, setMarketData] = useState([]);
  const API_URL = "https://farm-jqcq.onrender.com/farm/animals/";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setMarketData(response.data);
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="hero bg-img">
        <p>
          Welcome...!<br></br> Here Farmers Meet Buyers No middle-men involved
        </p>
        <p>Sign In To Buy or Sell</p>

        <div>
          <Link to="/sign-in">
            <button className="sign-in-btn mx-4">Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button className="sign-in-btn mx-4">Sign Up</button>
          </Link>
        </div>
        <div className="dev-links mt-5">
          <Link to="/animal-list">Animal List</Link>
          <Link to="/cart">My Cart</Link>
          <Link to="/farm-upload">Upload animal</Link>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="mb-4 heading-2">Samples From Our Market</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {marketData.map((animal, index) => (
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
                    <strong>Productivity: </strong>
                    {animal.productivity}
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
      <div className="bg-dark">
        <div className="container testimonial-section bg-dark">
          <div className="mt-5 mb-5">
            <div className="mt-5">
              <h2 className="testimonial-heading pt-4">
                What People Are Saying About Us
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card mb-3 bg-dark text-light border-dark">
                  <div className="card-body">
                    <img
                      src="https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg?auto=compress&cs=tinysrgb&w=600"
                      className="card-img-top"
                      alt="Ken Amos"
                    />
                    <h5 className="card-title">Ken Amos - Buyer</h5>
                    <p className="card-text">Good animals sold here</p>
                    <p className="card-text">I recommend this site</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card mb-3 bg-dark text-light border-dark">
                  <div className="card-body">
                    <img
                      src="https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg?auto=compress&cs=tinysrgb&w=600"
                      className="card-img-top"
                      alt="Jane Doe"
                    />
                    <h5 className="card-title">Jane Doe - Farmer</h5>
                    <p className="card-text">
                      Excellent service, highly recommended!
                    </p>
                    <p className="card-text">
                      Will definitely sell here again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
