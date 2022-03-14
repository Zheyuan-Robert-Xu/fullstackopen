import React from "react";
import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Display = (props) => <div>{props.value}</div>;
const Header = (props) => <h1>{props.title}</h1>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [mostVoted, findMostVoted] = useState(0);
  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(new Uint8Array(anecdotes.length)); /// tricky is to use new Uint8Array(anecdotes.length)in useState

  const selectAnecdote = () => {
    /// make sure always change the index
    var newIndex = Math.floor(Math.random() * anecdotes.length);
    while (selected === newIndex) {
      newIndex = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(newIndex);
    // findMostVoted(voted.indexOf(Math.max(...voted)));
  };

  const voteAddValue = () => {
    const copyAryList = [...voted];
    copyAryList[selected] += 1;
    findMostVoted(copyAryList.indexOf(Math.max(...copyAryList))); /// must use copyAryList
    setVoted(copyAryList);
  };

  return (
    <div>
      <Header title={"Anecdote of the day"} />
      <Display value={anecdotes[selected]} />
      <Display value={"has " + voted[selected] + " votes"} />
      <Button handleClick={() => voteAddValue()} text="vote" />
      <Button handleClick={() => selectAnecdote()} text="next anecode" />
      <Header title={"Anecdote with most votes"} />
      <Display value={anecdotes[mostVoted]} />
      <Display value={"has " + voted[mostVoted] + " votes"} />
    </div>
  );
};

export default App;
