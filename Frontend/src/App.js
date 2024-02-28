import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD

import "./App.css";
=======
>>>>>>> development
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./components/Contact"
import About from "./components/About"
import AnimalList from "./components/AnimalList"
import Cart from "./pages/Cart";
<<<<<<< HEAD
import FarmUpload from "./pages/FarmUpload";
import FarmOrders from "./pages/FarmOrders";
import CheckOut from "./pages/CheckOut";
=======
import FarmOrders from "./pages/FarmOrders";
import Logout from "./pages/Logout";
import Checkout from "./components/Checkout";
import Dashboard from "./dashboard/Dashboard";
import TrackOrders from "./dashboard/TrackOrders";
>>>>>>> development

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
<<<<<<< HEAD
          <Route path="/farm-upload" element={<FarmUpload />} />
          <Route path="/farm-orders" element={<FarmOrders />} />
          <Route path="/check-out" element={<CheckOut />} />
=======
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/trackorders" element={<TrackOrders />} />
          <Route path="/farm-upload" element={<Dashboard />} />
          <Route path="/farm-orders" element={<FarmOrders />} />
>>>>>>> development
        </Routes>
      </Router>
    </>
  );
}

export default App;
