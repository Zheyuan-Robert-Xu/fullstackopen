import React, { useState, useEffect } from "react";
import axios from "axios";

import Languages from "./Languages";

const SingleCountry = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const [show, setShow] = useState(null);

  const api_key = process.env.REACT_APP_API_KEY;

  const capital = country.capital;

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          capital +
          "&appid=" +
          api_key
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
      });
  }, []);
  console.log("second");
  console.log(weather);

  const temp = weather ? (weather.main.temp - 273.15).toFixed(1) : null;
  const windSpeed = weather ? weather.wind.speed : null;

  console.log("get first weather");
  return show === country.name.common ? (
    <div key={country.name.common}>
      {country.name.common}
      <button onClick={() => setShow(null)}>hide</button>
      <div>
        <h2>{country.name.common}</h2>
        <div>capitial {country.capital}</div>
        <div>area {country.area}</div>
        <h3>Languages:</h3>
        <Languages languagesObj={country.languages} />

        <img src={country.flags.png} alt="Flag" height="200"></img>
        <h2>Weather in {country.capital}</h2>
        <p>temperature {temp} Celcius</p>
        <img
          src={
            "http://openweathermap.org/img/wn/" +
            weather.weather[0].icon +
            "@2x.png"
          }
          alt="Wheather Icon"
          height="100"
        ></img>

        <p>wind {windSpeed} m/s</p>
      </div>
    </div>
  ) : (
    <div key={country.name.common}>
      {country.name.common}
      <button onClick={() => setShow(country.name.common)}>show</button>
    </div>
  );
};

export default SingleCountry;
