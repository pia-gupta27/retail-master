/*import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};*/

// utils.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB"); // Add this line for confirmation
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
    throw new Error("Failed to connect to MongoDB");
  }
};


