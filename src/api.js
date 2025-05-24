// src/api/api.js
import axios from 'axios';

export const predictFakeNews = async (text) => {
  try {
    const response = await axios.post('http://localhost:5000/predict', { text });
    return response.data.prediction; // This will return 'Fake' or 'Real'
  } catch (error) {
    console.error("Error calling backend:", error);
    return "Error";
  }
};
