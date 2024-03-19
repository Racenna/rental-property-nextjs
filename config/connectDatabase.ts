import mongoose from "mongoose";

let connected = false;

const connectDatabase = async () => {
  mongoose.set("strictQuery", true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }

  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    console.log("MongoDB URI is not provided");
    return;
  }
  // Connect to MongoDB

  try {
    await mongoose.connect(MONGODB_URI);
    connected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;
