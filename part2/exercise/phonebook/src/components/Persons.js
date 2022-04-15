import React from "react";

const Persons = ({ personsFilter, deletePerson }) => {
  return personsFilter.map((person) => (
    <div key={person.id}>
      {person.name} <span>{person.number}</span>
      <button onClick={() => deletePerson(person)}>delete</button>
    </div>
  ));
};

export default Persons;
