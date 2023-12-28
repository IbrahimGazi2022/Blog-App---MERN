const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database Connected Successfully`.bgGreen.white);

    } catch (error) {
        console.log(`error`.bgRed.white);
    }
};

module.exports = connectDB;