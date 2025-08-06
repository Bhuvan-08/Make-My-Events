const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://bhuvan:Bhuvan%40123@makemyevents.0k0r9.mongodb.net/MakeMyEvents?retryWrites=true&w=majority&appName=MakeMyEvents';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully!");


    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); 
    }
};

module.exports = mongoDB;