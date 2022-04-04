import React from "react";
import CountriesSimple from "./CountriesSimple";
import SingleCountry from "./SingleCountry";

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
      return <SingleCountry country={list[0]} />;
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
