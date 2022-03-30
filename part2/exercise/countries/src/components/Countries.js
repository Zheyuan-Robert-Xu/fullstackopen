import React from "react";
import CountriesSimple from "./CountriesSimple";
import Languages from "./Languages";

const Countries = ({ countries, newFilter }) => {
  let number = countries.filter((country) =>
    country.name.common.toLowerCase().includes(newFilter.toLowerCase())
  ).length;
  let list = countries.filter((country) =>
    country.name.common.toLowerCase().includes(newFilter.toLowerCase())
  );
  console.log(number);
  if (newFilter === "") {
    return <div>Please enter a filter</div>;
  }
  switch (number) {
    case 0:
      return <div>No countries found</div>;

    case 1:
      console.log(list[0].languages);
      return (
        <div>
          <h2>{list[0].name.common}</h2>
          <div>capitial {list[0].capital}</div>
          <div>area {list[0].area}</div>
          <h3>Languages:</h3>
          <Languages languagesObj={list[0].languages} />

          <img src={list[0].flags.png} alt="Flag" height="200"></img>
        </div>
      );
    default:
      break;
  }
  if (number >= 2 && number <= 10) {
    return <CountriesSimple countriesSimple={list} />;
  } else {
    return <div>Too many matches, please use another filter</div>;
  }
};

export default Countries;
