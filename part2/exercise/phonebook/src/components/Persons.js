import React from "react";
import Person from "./Person";

const Persons = ({ persons, newFilter }) => {
  return (
    <div>
      {persons.map((person) =>
        newFilter === "" ? (
          <Person key={person.name} person={person} />
        ) : person.name.toLowerCase().includes(newFilter.toLowerCase()) ? (
          <Person key={person.name} person={person} />
        ) : null
      )}
    </div>
  );
};

export default Persons;
