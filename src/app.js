import mongoose from "mongoose";
import express from "express";
import Registration from "./models/registrationModel.js";
import cors from "cors";
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(
  cors({
    origin: "https://danish-frontend-2.vercel.app",
  })
);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://itsgeekyyashaswi:admin@cluster0.n8f96lb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ",
    { dbName: "danishDB" }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Example route to create a new registration
app.post("/register", async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,

      message,
      dateOfEvent,
      reachedThrough,
      query,
      services,
    } = req.body;

    if (!name || !phoneNumber) {
      return res.status(400).json({
        error: "please give phonenumber and name properly",
      });
    }

    const user = await Registration.create({
      name,
      email,
      phoneNumber,

      message,
      services,
      dateOfEvent,
      reachedThrough,
      query,
    });

    res.status(201).json({
      data: user,
      message: "registration completed successfully..",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/", async (req, res) => {
  try {
    res.send("hello Home");
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/getdetailsxyz", async (req, res) => {
  try {
    const users = await Registration.find();
    res.status(200).json({ message: "data fetched sucessfully", data: users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
