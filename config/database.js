import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  // if database is already connected, then dont connect

  if (connectDB) {
    console.log("DB connected");
    return;
  }
  // connect to mongo DB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connectDB = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
