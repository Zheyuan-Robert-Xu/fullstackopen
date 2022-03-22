import React from "react";
import { useState } from "react";
import Person from "./components/Person";

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    // event.preventDefault(); //prevents the default action of submitting a form /// did not need to call the event.preventDefault() method like we did in the onSubmit event handler. This is because there is no default action that occurs on an input change
    event.preventDefault();
    const newPerson = {
      name: newName,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    };

    setPersons(persons.concat(newPerson)); // does not mutate the original notes array, but rather creates a new copy of the array with the new item added to the end
    // This is important since we must never mutate state directly in React
    setNewName(""); // The event handler also resets the value of the controlled input element by calling the setNewNote function of the newNote state:
  };

  const handlePersonChange = (event) => {
    // The event handler function receives the event object as its event parameter
    console.log(event.target.value);
    // The target property of the event object now corresponds to the controlled input element
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default App;
