import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import PhoneService from "./services/phonebook";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchPerson, setNewSearch] = useState("");
  const [personsFilter, setPersonsFilter] = useState(persons);
  const [modifyMessage, setModifyMessage] = useState(null);

  useEffect(() => {
    PhoneService.getAll().then((returnedPersons) => {
      setPersons(returnedPersons);
      setPersonsFilter(returnedPersons);
    });
  }, []);

  const filterPersons = (e) => {
    const searchPerson = e.target.value;
    setNewSearch(searchPerson);
    const newPersons = persons.filter(
      (person) =>
        person.name.toLowerCase().search(searchPerson.toLowerCase()) !== -1 // not match
    );
    setPersonsFilter(newPersons);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setNewName("");
    setNewNumber("");
    const alreadyExists = persons.some((person) => person.name === newName);
    const existingPerson = persons.find((person) => person.name === newName);

    if (alreadyExists) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const changedPerson = { ...existingPerson, number: newNumber };

        PhoneService.update(existingPerson.id, changedPerson).then(
          (returnedPerson) => {
            /// only in this it will update automatically
            const newPersons = persons.map((person) =>
              person.id !== existingPerson.id ? person : returnedPerson
            );
            setPersons(newPersons);
            setPersonsFilter(newPersons);
            setModifyMessage({
              text: `Modified '${returnedPerson.name}''s number to '${returnedPerson.number}'`,
              type: "success",
            });
            setTimeout(() => {
              setModifyMessage(null);
            }, 5000);
          }
        );
      }
      return;
    }
    PhoneService.create({ name: newName, number: newNumber }).then(
      (returnedPerson) => {
        const newPersons = persons.concat(returnedPerson);
        setPersons(newPersons);
        setPersonsFilter(newPersons);
        setModifyMessage({
          text: `Added '${returnedPerson.name}'`,
          type: "success",
        });

        setTimeout(() => {
          setModifyMessage(null);
        }, 5000);
      }
    );
  };

  const deletePerson = ({ id, name }) => {
    const existingPerson = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${name}?`)) {
      PhoneService.deletePerson(id)
        .then((response) => {
          const newPersons = persons.filter((person) => person.id !== id);
          setPersons(newPersons);
          setPersonsFilter(newPersons);
        })
        .catch((error) => {
          setModifyMessage({
            text: `Information of '${existingPerson.name}' has already been removed from server`,
            type: "error",
          });
          setTimeout(() => {
            setModifyMessage(null);
          }, 5000);
          // make the change dynamically
          const newPersons = persons.filter((person) => person.id !== id);
          setPersons(newPersons);
          setPersonsFilter(newPersons);
        });
    }
  };

  const formData = {
    onFormSubmit,
    newName,
    setNewName,
    newNumber,
    setNewNumber,
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={modifyMessage} />
      <Filter value={searchPerson} onChange={filterPersons} />
      <h3>Add a new</h3>
      <PersonForm data={formData} />
      <h3>Numbers</h3>
      <Persons personsFilter={personsFilter} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
