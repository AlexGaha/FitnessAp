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
      required: [true, "category is required."],
      minLength: [3, 'category must be at least three characters']
    },
    exercise1: {
      type: String,
      required: [true, "exercise1 is required."],
      minLength: [3, ' exersice1 must be at least three characters']
    },
    exercise2: {
      type: String,
      required: [true, "exercise2 is required."],
      minLength: [3, ' exersice2 must be at least three characters']
      
    },
    exercise3: {
      type: String,
      required: [true, "exercise3 is required."],
      minLength: [3, ' exersice3 must be at least three characters']
    },
    exercise4: {
      type: String,
      required: [true, "exercise4 is required."],
      minLength: [3, ' exersice4 must be at least three characters']
    },
    exercise5: {
      type: String,
      required: [true, "exercise5 is required."],
      minLength: [3, ' exercise5 must be at least three characters']
    },
  },
  { timestamps: true }
);

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
