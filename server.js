
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve your website
app.use(express.static(__dirname));

// Test whether the backend is working
app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    message: "AI for Schools backend is running!"
  });
});

// Placeholder for a future AI chatbot
app.post("/api/chat", (req, res) => {
  res.json({
    reply: "Your backend is working! An approved AI provider still needs to be connected."
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
