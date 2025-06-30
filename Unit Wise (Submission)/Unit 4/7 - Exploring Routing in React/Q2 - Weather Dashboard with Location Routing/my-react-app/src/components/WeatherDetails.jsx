import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function WeatherDetails() {
  const { city } = useParams();
  const navigate = useNavigate();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "bf4391e00e92fa21216d434459c12644";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!res.ok) {
          throw new Error("City not found");
        }

        const data = await res.json();
        setWeather(data);
        setError("");
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, [city]);

  if (error) return <p style={{ padding: "20px" }}>{error}</p>;
  if (!weather) return <p style={{ padding: "20px" }}>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "15px" }}>
        Back
      </button>
      <h2>Weather in {city}</h2>
      <p>
        <strong>Temperature:</strong> {weather.main.temp} °C
      </p>
      <p>
        <strong>Humidity:</strong> {weather.main.humidity}%
      </p>
      <p>
        <strong>Condition:</strong> {weather.weather[0].description}
      </p>
    </div>
  );
}

export default WeatherDetails;
