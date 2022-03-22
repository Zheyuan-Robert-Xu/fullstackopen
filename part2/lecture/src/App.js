import { useState } from "react";
import React from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);
  const addNote = (event) => {
    // event.preventDefault(); //prevents the default action of submitting a form /// did not need to call the event.preventDefault() method like we did in the onSubmit event handler. This is because there is no default action that occurs on an input change
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject)); // does not mutate the original notes array, but rather creates a new copy of the array with the new item added to the end
    // This is important since we must never mutate state directly in React
    setNewNote(""); // The event handler also resets the value of the controlled input element by calling the setNewNote function of the newNote state:
  };

  const handleNoteChange = (event) => {
    // The event handler function receives the event object as its event parameter
    console.log(event.target.value);
    // The target property of the event object now corresponds to the controlled input element
    setNewNote(event.target.value);
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
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        {/* registered an event handler to the onChange attribute */}
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>{" "}
      </form>
    </div>
  );
};

export default App;
