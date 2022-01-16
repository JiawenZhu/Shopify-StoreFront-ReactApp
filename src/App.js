import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart"

function App() {
  return (
    <Router>
      <NavBar />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:handle" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
