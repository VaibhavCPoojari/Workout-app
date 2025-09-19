const express = require('express');
const router = express.Router();
const {
    getworkouts, getWorkout, createWorkout
} = require('../controllers/workoutcontroller');

router.get('/', getworkouts);

router.get('/:id', getWorkout);

router.post('/', createWorkout);

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete workout with ID ${req.params.id}' });
});

router.patch('/:id', (req, res) => {
  res.json({ message: 'Update workout with ID ${req.params.id}' });
});

module.exports = router;