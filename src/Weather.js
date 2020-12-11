import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            city: response.data.name
        })
    }

    if (weatherData.ready) {
        return(        
        <div className="Weather">

        <form>
          <div className="row">
            <div className="col-10">
              <input
                Type="search"
                placeHolder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-1">
                <button Type="submit"
                className="btn btn-primary"><i class="fas fa-redo-alt"></i></button>
            </div>
          </div>
        </form>

        <div className="description text-capitalize">{weatherData.description}</div>

        <div className="row">
        <div className="col-6">
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
        <span className="unit">°C</span>
        </div>
        <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
        </div>
        </div>


        <div className="row">
        <div className="col-6">
        <ul>
        <li><i class="fas fa-water"></i> {Math.round(weatherData.humidity)}%</li>
            <li> <i class="fas fa-wind"></i> {Math.round(weatherData.wind)} km/h</li>
        </ul> 
        </div>
        <div className="date col-6">Last updated: {weatherData.date}</div>
        </div>
        
        </div>
        );
    } else {
        const apiKey = "666e992c8bf5317be35ba26eb820d6ec";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);    
        return "Loading..";
    }
}