import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB Atlas Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    await mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB Atlas:", err.message);
    process.exit(1);
  }
};

export default connectDB;
