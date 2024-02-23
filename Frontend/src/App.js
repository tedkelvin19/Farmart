import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./components/Contact"
import About from "./components/About"
import AnimalList from "./components/AnimalList"
import Cart from "./pages/Cart";
import FarmUpload from "./pages/FarmUpload";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/animal-list" element={<AnimalList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/farm-upload" element={<FarmUpload />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
