import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000)
        })
    }

    function search() {
        const apiKey = "666e992c8bf5317be35ba26eb820d6ec";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);    
    }

    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    } 

    if (weatherData.ready) {
        return(        
        <div className="Weather">

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                Type="search"
                placeHolder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-1">
                <button Type="submit"
                className="btn btn-primary"><i class="fas fa-redo-alt"></i></button>
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />

        
        </div>
        );
    } else {
        search();
        return "Loading..";
    }
}