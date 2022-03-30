import React from "react";
import { useState } from "react";
import Languages from "./Languages";

const CountriesSimple = ({ countriesSimple }) => {
  const [show, setShow] = useState(null);

  return (
    <div>
      {countriesSimple.map((singleCountry) => {
        return show === singleCountry.name.common ? (
          <div key={singleCountry.name.common}>
            {singleCountry.name.common}
            <button onClick={() => setShow(null)}>show</button>
            <div>
              <h2>{singleCountry.name.common}</h2>
              <div>capitial {singleCountry.capital}</div>
              <div>area {singleCountry.area}</div>
              <h3>Languages:</h3>
              <Languages languagesObj={singleCountry.languages} />

              <img src={singleCountry.flags.png} alt="Flag" height="200"></img>
            </div>
          </div>
        ) : (
          <div key={singleCountry.name.common}>
            {singleCountry.name.common}
            <button onClick={() => setShow(singleCountry.name.common)}>
              hide
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesSimple;
