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
// import React from "react";
// import { useState } from "react";

// const Display = ({ counter }) => <div>{counter}</div>;

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   // <button onClick={setCounter(counter + 1)}>
//   //it executes the function call setCounter(0+1), and changes the value of the component's state to 1. This will cause the component to be re-rendered,
//   //React will execute the setCounter function call again, and the state will change leading to another rerender...

//   //() => setCounter(counter + 1) The setCounter function is called only when a user clicks the button.

//   const increaseByOne = () => setCounter(counter + 1);
//   const decreaseByOne = () => setCounter(counter - 1);
//   const setToZero = () => setCounter(0);
//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />{" "}
//       <Button onClick={setToZero} text="zero" />{" "}
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   );
// };
// export default App;

///part d: Complext state
// import React from "react";
// import { useState } from "react";

// const History = (props) => {
//   /// conditional rendering
//   if (props.allClicks.length === 0) {
//     return <div>the app is used by pressing the buttons</div>;
//   }
//   return <div>button press history: {props.allClicks.join(" ")}</div>;
// };

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>{text}</button>
// );

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   // const handleLeftClick = () => {
//   //   setClicks({
//   //     ...clicks, /// creates a new object that has copies of all of the properties of the clicks object
//   //     left: clicks.left + 1,
//   //   });
//   // };

//   // const [allClicks, setAll] = useState([])

//   // const handleRightClick = () => {
//   //   setClicks({
//   //     ...clicks,
//   //     right: clicks.right + 1,
//   //     /// react forbides mutate state directly, since it can result in unexpected side effects. Changing state has to always be done by setting the state to a new object.
//   // // clicks.left++
//   // // setClicks(clicks)
//   //   });
//   // };

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L")); // does not mutate the existing array but rather returns a new copy of the array with the item added to it

//     /// the following is not good as the state of React components like allClicks must not be mutated directly
//     // allClicks.push('L')
//     // setAll(allClicks)
//     // setLeft(left + 1)
//     setLeft(left + 1);
//   };

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"));
//     setRight(right + 1);
//   };

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text="left" />
//       <Button handleClick={handleRightClick} text="right" />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   );
// };
// export default App;

/// part D. event Handling Revisited
// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState(10);
//   // When the component gets rendered, no function gets called and only the
//   //reference to the arrow function is set to the event handler. Calling the
//   //function happens only once the button is clicked.

//   const handleClick = () => {
//     console.log("clicked the button");
//     setValue(0);
//   };

//   return (
//     <div>
//       {value}
//       {/* Naturally, our event handler function can be composed of multiple commands. In these cases we use the longer curly brace syntax for arrow functions: */}
//       <button onClick={handleClick}>button</button>
//     </div>
//   );
// };
// export default App;

//part D. Function that returns a function
import React, { useState } from "react";
// import ReactDom from "react-dom";

/// Do Not Define Components Within Components
/// Display and button should be put outside of APP
const Display = (props) => <div>{props.value}</div>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  );
};
export default App;
