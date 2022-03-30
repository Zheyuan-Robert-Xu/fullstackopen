import React from "react";
import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";

import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Countries countries={countries} newFilter={newFilter} />
    </div>
  );
};

export default App;
