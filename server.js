const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// env configuration
dotenv.config();

// Database Connection
connectDB();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.get('/', (req, res) => {
    res.status(200).send({
        'message': "Node Server"
    });
});

// Port 
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} port ${PORT}`.bgMagenta.black);
});