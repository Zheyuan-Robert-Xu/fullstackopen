import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    name: "Ada Lovelace",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
];

ReactDOM.render(<App persons={persons} />, document.getElementById("root"));
