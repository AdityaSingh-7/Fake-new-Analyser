// src/App.js
import React, { useState } from "react";
import TextInput from "./TextInput.jsx";
import Result from "./Result.jsx";
import { predictFakeNews } from "./api.js";

const App = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = async (text) => {
    const prediction = await predictFakeNews(text);
    setResult(prediction);
  };

  return (
    <div className="App">
      <h1>Fake News Detector</h1>
      <TextInput onSubmit={handleSubmit} />
      <Result result={result} />
    </div>
  );
};

export default App;
