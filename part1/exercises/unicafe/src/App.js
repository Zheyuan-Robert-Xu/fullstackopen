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
    const positive = ((good / total) * 100).toFixed(1);
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <Display value={"good "} />
            </td>
            <td>
              <Display value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <Display value={"neutral "} />
            </td>
            <td>
              <Display value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <Display value={"bad "} />
            </td>
            <td>
              <Display value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <Display value={"all "} />
            </td>
            <td>
              <Display value={total} />
            </td>
          </tr>
          <tr>
            <td>
              <Display value={"average "} />
            </td>
            <td>
              <Display value={average} />
            </td>
          </tr>
          <tr>
            <td>
              <Display value={"positive "} />
            </td>
            <td>
              <Display value={positive + "%"} />
            </td>
          </tr>
        </tbody>
      </table>
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
