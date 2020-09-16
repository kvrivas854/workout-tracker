const express = require("express");
const app = express();
const path = require("path");

// index route loads exercise.html
app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
// index route loads stats.html
app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = app;