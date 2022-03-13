import React, { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Display = (props) => <div>{props.value}</div>;

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return <p>No feedback given</p>;
  } else {
    const average = (good - bad) / total;
    const positive = (good / total) * 100;
    return (
      <div>
        <Display value={good !== 0 ? "good " + good : null} />
        <Display value={neutral !== 0 ? "neutral " + neutral : null} />
        <Display value={bad !== 0 ? "bad " + bad : null} />
        <Display value={total !== 0 ? "all " + total : null} />
        <Display value={total !== 0 ? "average " + average : null} />
        <Display value={total !== 0 ? "positive " + positive + "%" : null} />
      </div>
    );
  }
};

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
