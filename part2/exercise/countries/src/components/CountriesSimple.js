import React from "react";

import SingleCountry from "./SingleCountry";

const CountriesSimple = ({ countriesSimple }) => {
  return (
    <div>
      {countriesSimple.map((singleCountry) => {
        return (
          <SingleCountry
            key={singleCountry.name.common}
            country={singleCountry}
          />
        );
      })}
    </div>
  );
};

export default CountriesSimple;
