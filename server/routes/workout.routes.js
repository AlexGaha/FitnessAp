const express = require('express');
const router = express.Router();
const {  getAll, getOneCategory, createOne, updateOne ,deleteOne, getOne } = require( "../controllers/workout.controller.js");

router.route('/')
  .get(getAll)
  .post(createOne);

router.route('/category/:categoryName')
  .get(getOneCategory);

router.route('/:id')
  .put(updateOne)
  .get(getOne)
  .delete(deleteOne);

module.exports = router;