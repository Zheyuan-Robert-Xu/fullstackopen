import React from "react";

const CountriesSimple = ({ countriesSimple }) => {
  return (
    <div>
      {countriesSimple.map((singleCountry) => {
        return (
          <div key={singleCountry.name.common}>{singleCountry.name.common}</div>
        );
      })}
    </div>
  );
};

export default CountriesSimple;
