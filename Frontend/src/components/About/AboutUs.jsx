import "./About.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="container about">
        <div className="row mt-5">
          <div className="col">
            <h2 className="text-center">About Us</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sed lorem auctor, volutpat nisi eu, maximus quam. Sed condimentum
              ex in convallis. Nulla facilisi. Nullam in bibendum mi. Nulla
              facilisi. Etiam id velit a nibh malesuada aliquet. Praesent id
              justo non lorem fringilla eleifend.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, repellendus ut dicta deserunt modi possimus quae ratione nihil quibusdam, aliquam iste, ad quis quam blanditiis. Est, nihil sint? Sunt nihil molestias assumenda similique itaque atque!
            </p>
          </div>
          <div className="col-md-6">
            <h3>Our Vision</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima dolor quidem aliquam ad, blanditiis possimus dignissimos repellat excepturi, deleniti sequi iure quis deserunt quos quo ipsum consectetur consequatur eaque. Ipsa omnis laboriosam doloribus voluptas!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
