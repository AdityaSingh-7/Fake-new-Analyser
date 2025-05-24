// fake-news-backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',  // Allow frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }));
  
app.use(bodyParser.json());

// Fake News Prediction Endpoint
app.post('/predict', async (req, res) => {
  const { text } = req.body;

  try {
    // Send a request to the model API (if the model is deployed externally)
    // const response = await axios.post('MODEL_API_URL', { text });

    // If you're running the model locally, you can import and use your model here
    // For now, we will simulate a response
    const prediction = fakeNewsPrediction(text); // Replace with real prediction

    // Respond with the result
    res.json({ prediction });
  } catch (error) {
    console.error("Error processing prediction:", error);
    res.status(500).send('Internal Server Error');
  }
});

// Simulate the fake news prediction
const fakeNewsPrediction = (text) => {
  // For demonstration purposes, this is a mock of a prediction.
  // Replace this with actual prediction logic from your model.
  return text.toLowerCase().includes("fake") ? "Fake" : "Real";
};

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
