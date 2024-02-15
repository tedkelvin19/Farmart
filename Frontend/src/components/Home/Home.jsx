import "./Home.css";
import Header from "../Header/Header"

const Home = () => {
  const myStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    height: "80vh",
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <>
      <Header />
      <div className="hero" style={myStyle}>
        <p>
          Welcome...!<br></br> Here Farmers Meet Buyers No middle-men involved
        </p>
        <p>Sign In To Buy or Sell</p>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </>
  );
};

export default Home;
