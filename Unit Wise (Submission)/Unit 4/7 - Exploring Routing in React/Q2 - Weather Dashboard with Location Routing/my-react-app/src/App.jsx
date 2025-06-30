import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WeatherDetails from "./components/WeatherDetails";
import { NotFound } from "./components/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city" element={<WeatherDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
