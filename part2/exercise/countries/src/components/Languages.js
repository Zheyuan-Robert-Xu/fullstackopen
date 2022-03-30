import React from "react";

const Languages = ({ languagesObj }) => {
  console.log("kkk");
  return (
    <ul>
      {/* key point to retrieve value of object--language */}
      {Object.values(languagesObj).map((languageObj, index) => {
        return <li key={index + languageObj}>{languageObj}</li>;
      })}
    </ul>
  );
};

export default Languages;
