import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import bookroute from './route/bookroute.js';
import userRoute from './route/userroute.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
app.use(cors());
app.use(express.json());

const connectToDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToDB();

app.use("/book", bookroute);
app.use("/users",userRoute);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
