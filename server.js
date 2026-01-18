const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5501;

// Middleware
app.use(cors()); // allow frontend to connect
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("Exam Sathi AI Backend is running 🚀");
});

// Main API: Generate Study Plan
app.post("/generate-plan", (req, res) => {
  const { exam, hoursPerDay, subjects } = req.body;

  // Simple AI-like logic (for now)
  let plan = `📘 Study Plan for ${exam}\n\n`;

  subjects.forEach(subject => {
    plan += `• ${subject}: ${Math.floor(hoursPerDay / subjects.length)} hours/day\n`;
  });

  plan += `\n⏰ Total Study Time: ${hoursPerDay} hours/day`;

  res.json({
    success: true,
    plan: plan
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
