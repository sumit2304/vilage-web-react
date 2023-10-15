import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";


const fetchWeatherData = async () => {
  try {
    
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?...");
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
  }
};

const WeatherPopup = ({ isOpen, onRequestClose }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherInfo = async () => {
      const data = await fetchWeatherData();
      setWeatherData(data);
    };
    getWeatherInfo();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          width: "80%",
          maxWidth: "400px",
          margin: "auto",
          padding: "20px",
        },
      }}
    >
      {weatherData ? (
        <div>
          <h2>Weather Information</h2>
          <p>Location: {weatherData.name}, {weatherData.sys.country}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather information...</p>
      )}
    </Modal>
  );
};

export default WeatherPopup;
