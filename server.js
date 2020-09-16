const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//================================
//SAMPLE ENTRY
//================================
db.Workout.create({type: "Running123", 
                name: "Test Workout",
                duration: 30,
                weight: 0,
                reps: 2,
                sets: 0})
.then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({ message }) => {
    console.log(message);
  });

//================================
//ROUTES
//================================

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

//--------------------------------
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
