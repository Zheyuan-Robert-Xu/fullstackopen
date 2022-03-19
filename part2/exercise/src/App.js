import React from "react";

const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => (
  <p>
    <strong>total of {sum} exercises</strong>
  </p>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);
const Course = ({ course, total }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total sum={total} />
  </div>
);

const Content = ({ parts }) => (
  <div>
    <Part part={parts[0]} />
    <Part part={parts[1]} />
    <Part part={parts[2]} />
    <Part part={parts[3]} />
  </div>
);

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 3,
      },
    ],
  };

  const initialValue = 0;

  const total = course.parts.reduce(
    (previousValue, currentObject) => previousValue + currentObject.exercises,
    initialValue
  ); // initial Value is 0,
  console.log(total);

  return <Course course={course} total={total} />;
};

export default App;
