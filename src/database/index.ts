import mongoose from "mongoose";

const connectToDataBase = async (uri: string) => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log("Error connecting database", (error as Error).message);
  }
};

export default connectToDataBase;
