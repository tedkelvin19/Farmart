import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import FarmOders from "./components/FarmOrders/FarmOders";
import FarmUpload from "./components/FarmUpload/FarmUpload";
import AnimalList from "./components/AnimalList/AnimalList";
import MyCart from "./components/MyCart/MyCart";
import CheckOut from "./components/MyCart/MyCart";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/view-farm-orders", element: <FarmOders /> },
  { path: "/sell-animal", element: <FarmUpload /> },
  { path: "/animal-list", element: <AnimalList /> },
  { path: "/view-cart", element: <MyCart /> },
  { path: "/check-out", element: <CheckOut /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/farm-upload", element: <FarmUpload /> },
  { path: "/my-cart", element: <MyCart /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
