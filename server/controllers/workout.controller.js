const Workout = require('../models/workout.model');

//get all
const getAll = (_, res) => {
  Workout.find()
  .then(workouts => res.status(200).json(workouts))
  .catch(err => res.status(400).json(err));
};

//get all in the category
const getOneCategory = (req, res) => {
  const { categoryName } = req.params
  console.log(categoryName)
  Workout.find({category : categoryName})
  .then(workouts => res.status(200).json(workouts))
  .catch(err => res.status(400).json(err));
};

//get one by id
const getOne = (req, res) => {
  Workout.findById({ _id: req.params.id })
  .then((workout) => res.status(200).json(workout))
  .catch((err) => res.status(400).json(err));
};

//create
const createOne = (req, res) => {
  console.log(req.body)
  Workout.create(req.body)
  .then((workout) => res.status(201).json(workout))
  .catch((err) => res.status(400).json(err));
};

//update
const updateOne = (req, res) => {
  Workout.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
  .then((workout) => res.status(200).json(workout))
  .catch((err) => res.status(400).json(err));
};

//delete
const deleteOne = (req, res) => {
  Workout.findByIdAndDelete({ _id: req.params.id })
  .then((workout) => res.status(200).json(workout))
  .catch((err) => res.status(400).json(err));
};

module.exports = { getAll, getOne, getOneCategory, createOne, updateOne ,deleteOne }