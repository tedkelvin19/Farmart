import React from 'react';
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/more-about.jpeg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const AboutHome = () => {
  return (
    <div>
        <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">More</p>
        <h1 className="primary-heading">
          Animals are Important Part Of our lives
        </h1>
        <p className="primary-text">
        Animals that live on a farm are usually kept there for their produce, labor, or meat. For centuries the relationship between man and certain animals have developed in such a way that the former takes care of the animals throughout its life, and in return takes the produce, for example, milk from cattle, and eggs from poultry.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutHome;



