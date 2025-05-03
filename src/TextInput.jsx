// src/components/TextInput.js
import React, { useState } from "react";

const TextInput = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="6"
        cols="50"
        placeholder="Paste the news article here..."
      />
      <br />
      <button type="submit">Check if it's Real or Fake</button>
    </form>
  );
};

export default TextInput;
