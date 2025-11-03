# 🌦️ Weather App — 5-Day Forecast with Leaflet Map

A responsive and user-friendly weather web application built with **HTML**, **CSS**, and **JavaScript**, featuring real-time weather data and a 5-day forecast using the **OpenWeatherMap API**, and interactive location display using **Leaflet (OpenStreetMap)**.

---

## 🚀 Features

✅ **Current Location Access**

- Automatically detects user’s location on page load (via browser geolocation).
- Displays current weather and map for the detected city.

✅ **City Search**

- Search any city worldwide to get its current weather and map location.
- Displays:

  - Temperature (°C)
  - Weather condition (Sunny, Cloudy, Rainy, etc.)
  - Humidity (%)
  - Wind speed (m/s)
  - Weather icon
  - Sunrise and Sunset times (in local timezone)

✅ **Interactive Map (Leaflet)**

- Displays the location of the searched or detected city on a live OpenStreetMap.
- Smooth zoom and marker updates.

✅ **5-Day Weather Forecast**

- Dedicated page showing forecast for the next 5 days.
- Each day card shows:

  - Date
  - Weather condition + icon
  - Minimum and maximum temperature

✅ **Clean & Responsive UI**

- Works on desktop and mobile.
- Modern design using vanilla HTML, CSS, and JS only — no frameworks.

---

## 🛠️ Technologies Used

| Technology             | Purpose                                   |
| ---------------------- | ----------------------------------------- |
| **HTML5**              | Structure of the web app                  |
| **CSS3**               | Styling and responsive design             |
| **JavaScript (ES6)**   | App logic and API handling                |
| **OpenWeatherMap API** | Fetch real-time and forecast weather data |
| **Leaflet.js**         | Map rendering and interaction             |
| **OpenStreetMap**      | Free map tiles provider                   |

---

## 🔑 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

### 2. Get an OpenWeatherMap API Key

- Go to [https://openweathermap.org/api](https://openweathermap.org/api)
- Sign up (free)
- Copy your **API key**

### 3. Configure the API Key

Open both `index.html` and `forecast.html` and replace:

```js
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
```

with your actual key.

### 4. Run the App

Simply open `index.html` in your browser.

> 💡 No server setup is required — it runs completely on the client side.

---

## 📂 Project Structure

```
weather-app/
│
├── index.html          # Main page - current weather + map
├── forecast.html       # 5-day forecast page
├── README.md           # Documentation
└── assets/             # (Optional) icons, images, etc.
```

---

## 🌍 How It Works

1. On load, the app requests location access.
2. If granted → fetches current weather via latitude & longitude.
3. If denied → allows manual search via city name.
4. Displays city details and updates Leaflet map.
5. Clicking **“5-Day Forecast”** redirects to a detailed forecast page.

---

## 🧭 Example APIs Used

**Current Weather:**

```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

**5-Day Forecast:**

```
https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric
```

---

## 🖼️ UI Preview (Optional)

You can include screenshots here:

```
📸 /screenshots
 ├── home-page.png
 ├── search-result.png
 └── forecast-page.png
```

---

## 🧩 Future Enhancements

- Add “Recent Searches” history
- Show hourly forecast
- Theme toggle (light/dark)
- Add air quality index (AQI) data
- Offline caching for last-searched city

---
