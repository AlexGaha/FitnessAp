const express = require('express');
const router = express.Router();
const {  getAll, getOneCategory, createOne, updateOne ,deleteOne } = require( "../controllers/workout.controller.js");

router.route('/')
  .get(getAll)
  .post(createOne);

router.route('/category')
  .get(getOneCategory);

router.route('/:id')
  .put(updateOne)
  .delete(deleteOne);

module.exports = router;