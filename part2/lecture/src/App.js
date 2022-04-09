import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import React from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  // There are two parameters. The first is a function, the effect itself.
  // second parameter of useEffect is used to specify how often the effect is run. If the second parameter is an empty array [], then the effect is only run along with the first render of the component.
  useEffect(() => {
    //The data returned by the server is plain text, basically just one long string. The axios library is still able to parse the data into a JavaScript array
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    };

    axios.post("http://localhost:3001/notes", noteObject).then((response) => {
      setNotes(notes.concat(response.data)), setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important }; /// so-called shallow copy

    axios.put(url, changedNote).then((response) => {
      //if note.id !== id is true; we simply copy the item from the old array into the new array.
      //If the condition is false, then the note object returned by the server is added to the array instead
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
    });
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
