// src/api/api.js
// import axios from "axios";

const API_URL = "http://localhost:8000/predict";  // FastAPI endpoint

export const predictFakeNews = async (text) => {
  try {
    const response = await axios.post(API_URL, { statement: text });
    return response.data.result;
  } catch (error) {
    console.error("Error making API request:", error);
    return null;
  }
};
