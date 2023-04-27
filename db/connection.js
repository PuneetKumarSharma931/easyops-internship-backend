const mongoose = require('mongoose');

const connectDB = async (URI) => {

    try {
        
        const conn = await mongoose.connect(URI);

        console.log(`MongoDB Successfully Connected Host:${conn.connection.host}`);

    } catch (error) {
        
        console.error(error);
    }
}

module.exports = connectDB;
