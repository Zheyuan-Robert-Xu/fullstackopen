import React from "react";

const Header = ({ course }) => <h2>{course}</h2>;

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
    {parts.map((part, i) => {
      return <Part key={i} part={part} />;
    })}
  </div>
);

export default Course;
