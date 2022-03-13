import React, { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Display = (props) => <div>{props.value}</div>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addValue = (newValue, text) => {
    switch (text) {
      case "good":
        setGood(newValue);
        break;
      case "neutral":
        setNeutral(newValue);
        break;
      case "bad":
        setBad(newValue);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header text={"give feedback"} />
      <Button handleClick={() => addValue(good + 1, "good")} text="good" />
      <Button
        handleClick={() => addValue(neutral + 1, "neutral")}
        text="neutral"
      />
      <Button handleClick={() => addValue(bad + 1, "bad")} text="bad" />
      <Header text={"statistics"} />
      <Display value={"good " + good} />
      <Display value={"neutral " + neutral} />
      <Display value={"bad " + bad} />
    </div>
  );
};

export default App;
