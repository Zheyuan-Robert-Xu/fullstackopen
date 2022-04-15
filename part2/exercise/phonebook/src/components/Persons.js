import React from "react";
import Person from "./Person";
import noteService from "../services/notes";

const Persons = ({ persons, newFilter }) => {
  const handleDelete = (personToDelete) => () => {
    const id = persons.find((person) => person.id === personToDelete.id).id;
    console.log(id);
    // ask user to confirm before delete operations
    let confirmation = window.confirm(`Delete ${personToDelete.name}?`);
    if (confirmation) {
      noteService.deleteNote(id);
    }
  };
  return (
    <div>
      {persons.map((person) =>
        newFilter === "" ? (
          <div>
            <div key={person.id}>
              {person.name} {person.number}
              <button onClick={handleDelete(person)}>Delete</button>
            </div>
          </div>
        ) : person.name.toLowerCase().includes(newFilter.toLowerCase()) ? (
          <div key={person.id}>
            {person.name} {person.number}
            <button onClick={handleDelete(person)}>Delete</button>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Persons;
