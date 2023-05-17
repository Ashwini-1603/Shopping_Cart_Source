import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/NavBar/Navbar.js";
import ProductCart from "./Components/ProductCart/ProductCart.js";
import Checkout from "./Components/Checkout/Checkout.js";
import Banner from './Components/Banner/Banner';
import Footer from "./Components/Footer/Footer.js";
// import Home from "./Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar path="/" />
        <Routes>
          
          <Route path="/ShoppingCart" element={<Banner />}/>
          <Route path="/ProductCart" element={<ProductCart />}/>
          <Route path="checkout" element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;