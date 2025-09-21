require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutsRouter = require('./routes/workouts');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/api/workouts',workoutsRouter);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server is running on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });

//now everything is set up


