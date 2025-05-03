// src/components/Result.js
import React from "react";

const Result = ({ result }) => {
  return (
    <div>
      {result ? (
        <h2>The article is: {result}</h2>
      ) : (
        <h2>Paste some text and hit "Check"</h2>
      )}
    </div>
  );
};

export default Result;
