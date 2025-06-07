const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // The new way: Firebase automatically loads the .env file into process.env
    if (!process.env.DATABASE_URI) {
      throw new Error("DATABASE_URI is not set in the environment.");
    }
    const conn = await mongoose.connect(process.env.DATABASE_URI);
    console.log(`MongoDB Atlas Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

module.exports = connectDB;