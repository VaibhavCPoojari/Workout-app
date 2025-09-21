const express = require('express');
const router = express.Router();
const {
    getworkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout
} = require('../controllers/workoutcontroller');

router.get('/', getworkouts);

router.get('/:id', getWorkout);

router.post('/', createWorkout);

router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);

module.exports = router;