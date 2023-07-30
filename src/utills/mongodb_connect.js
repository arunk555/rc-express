const mongoose = require("mongoose");
const { MONGODB_URL } = require("../config");
const logger = require("./logger");

const mongodb = async ()=>{
    try {
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        logger.info('MongoDB connected successfully!');
    } catch (error) {
        logger.error(error.message);
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = mongodb;