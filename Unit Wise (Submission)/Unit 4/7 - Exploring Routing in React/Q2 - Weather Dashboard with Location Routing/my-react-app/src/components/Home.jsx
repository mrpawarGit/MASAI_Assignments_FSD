import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim() !== "") {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Weather Dashboard</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Home;
