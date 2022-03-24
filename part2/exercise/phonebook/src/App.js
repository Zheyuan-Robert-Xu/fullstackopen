import React from "react";
import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const addPerson = (event) => {
    // event.preventDefault(); //prevents the default action of submitting a form /// did not need to call the event.preventDefault() method like we did in the onSubmit event handler. This is because there is no default action that occurs on an input change
    event.preventDefault();
    if (newName === "" || newNumber === "") {
      window.alert("Name or Number cannot be empty");
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    };

    persons.forEach((element) => {
      if (element.name === newName) {
        window.alert(`${newName} is already added to phonebook`);
      }
    });

    if (
      persons.every(
        (element) =>
          element.name !== newName && newName !== "" && newNumber !== ""
      )
    ) {
      setPersons(persons.concat(newPerson)); // does not mutate the original notes array, but rather creates a new copy of the array with the new item added to the end
      // This is important since we must never mutate state directly in React
      setNewName(""); // The event handler also resets the value of the controlled input element by calling the setNewNote function of the newNote state:
      setNewNumber("");
    }
  };

  const handlePersonChange = (event) => {
    // The event handler function receives the event object as its event parameter
    console.log(event.target.value);
    // The target property of the event object now corresponds to the controlled input element
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  );
};

export default App;
