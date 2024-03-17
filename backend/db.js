const mongoose = require("mongoose");
require('dotenv').config();


const mongoURL =  process.env.MONGO_URL;

const mongodb = () => {
    mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Database is connected...");
        })
        .catch((error) => {
            console.error("Error connecting to database:", error);
        });
};

module.exports = mongodb;
