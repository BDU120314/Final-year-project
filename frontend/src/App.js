import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <FarmerDashboard /> */}
    </div>
  );
};

export default App;
