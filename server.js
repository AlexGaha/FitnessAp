const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 8000;

const cors = require('cors');
app.use(express.json(), cors());

const connectDb = require('./server/config/mongoose.config');
connectDb();

const workoutRouter = require('./server/routes/workout.routes');
app.use('/api/workout', workoutRouter);


app.listen(port, () => console.log(`Listening on port: ${port}`));
