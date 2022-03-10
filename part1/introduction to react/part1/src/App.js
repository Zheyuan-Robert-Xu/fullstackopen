// Stateful component
//import React from "react";
// import { useState } from "react";

// const App = () => {
//   //setCounter modifies the state it causes the component to re-render
//   const [counter, setCounter] = useState(0); //assign the items to the variables counter and setCounter by using the destructuring assignment syntax shown earlier
//   setTimeout(() => setCounter(counter + 1), 1000); //passes it two parameters: a function to increment the counter state and a timeout of one second
//   // The function passed as the first parameter to the setTimeout function is invoked one second after calling the setTimeout function

//   console.log("rendering...", counter);
//   return <div>{counter}</div>;
// };

// export default App;

/// Event handling
import React from "react";
import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  // <button onClick={setCounter(counter + 1)}>
  //it executes the function call setCounter(0+1), and changes the value of the component's state to 1. This will cause the component to be re-rendered,
  //React will execute the setCounter function call again, and the state will change leading to another rerender...

  //() => setCounter(counter + 1) The setCounter function is called only when a user clicks the button.

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);
  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />{" "}
      <Button onClick={setToZero} text="zero" />{" "}
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};
export default App;
