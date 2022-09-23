const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required."],
      minLength: [3, 'name must be at least three characters']
    },
    category: {
      type: String,
      minLength: [3, 'name must be at least three characters']
    },
    exercise1: {
      type: String,
      minLength: [3, 'name must be at least three characters']
    },
    exercise2: {
      type: String,
      minLength: [3, 'name must be at least three characters']
    },
    exercise3: {
      type: String,
      minLength: [3, 'name must be at least three characters']
    },
    exercise4: {
      type: String,
      minLength: [3, 'name must be at least three characters']
      
    },
    exercise5: {
      type: String,
    },
  },
  { timestamps: true }
);

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
