import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [detailType, setDetailType, showDetail] = useState(''); 
  
  useEffect(() => {
    const fetchWeather = async () => {
      const lat = -6.1945;
      const lon = 106.8227; 
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weathercode,windspeed_10m&temperature_unit=celsius&wind_speed_unit=kmh`;

      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!weatherData || !weatherData.current_weather) {
    return <p>Data tidak tersedia</p>;
  }

  const hourly = weatherData.hourly;
  const temperatureHourly = hourly.temperature_2m[0];
  const { temperature, windspeed } = weatherData.current_weather;

  const openModal = (type) => {
    setDetailType(type);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='weather-container'>
      <div className='weather-info'>
        <h1>Informasi Cuaca untuk Plaza Indonesia</h1>
        <div className='weather-details'>
          <div className='weather-detail'>
          <button
              className='icon-button'
              onClick={() => openModal('temperature')}
            >
              <i className='fas fa-temperature-high'></i>
            </button>
            <p>Temperature: {temperature}°C</p>
          </div>
          <div className='weather-detail'>
          <button
              className='icon-button'
              onClick={() => openModal('windspeed')}
            >
              <i className='fas fa-wind'></i>
            </button>
            <p>Wind Speed: {windspeed} km/h</p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Weather Detail"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>{detailType === 'temperature' ? 'Temperature Details' : 'Wind Speed Details'}</h2>
        {detailType === 'temperature' && (
          <div>
            <p>Current Temperature: {temperature}°C</p>
            <p>Hourly Temperature: {temperatureHourly}°C</p>
          </div>
        )}
        {detailType === 'windspeed' && (
          <div>
            <p>Current Wind Speed: {windspeed} km/h</p>
            <p>Hourly Wind Speed: {hourly.windspeed_10m[0]} km/h</p>
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Weather;