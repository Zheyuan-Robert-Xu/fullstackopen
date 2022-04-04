import React from "react";
import Course from "./components/Course";

const CourseList = ({ course }) => {
  /// return is necessary
  return (
    <div>
      {course.map((singleCourse, i) => {
        console.log(singleCourse.name);
        return (
          // list items, i.e. the elements generated by the map method, must each have a unique key value
          <div key={i}>
            <Course
              course={singleCourse}
              total={singleCourse.parts.reduce(
                (previousValue, currentObject) =>
                  previousValue + currentObject.exercises,
                0
              )}
            />
          </div>
        );
      })}
    </div>
  );
};

const App = ({ course }) => {
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <CourseList course={course} />
    </div>
  );
};

export default App;