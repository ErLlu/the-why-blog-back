import mongoose from "mongoose";

const connectToDataBase = async (URI: string) => {
  try {
    await mongoose.connect(URI);
  } catch (error) {
    console.log("Error connecting database", (error as Error).message);
  }
};

export default connectToDataBase;
