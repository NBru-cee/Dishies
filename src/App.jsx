import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Menu from "./pages/Menu";
import MenuItem from "./pages/MenuItem";
import Profile from "./pages/Profile";
import Missing from "./pages/Missing";

const App = () => {
      return (
            <BrowserRouter>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/account" element={<Profile />} />
                        <Route path="/foods" element={<Menu />} />
                        <Route path="/foods/:id" element={<MenuItem />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<Missing />} />
                  </Routes>
                  <Footer />
            </BrowserRouter>
      );
};

export default App;
