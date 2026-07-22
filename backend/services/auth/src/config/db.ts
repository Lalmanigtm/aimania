import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("db connect");
  } catch (error) {
    console.log(`db error ${error}`);
  }
};

export default connectDB;
