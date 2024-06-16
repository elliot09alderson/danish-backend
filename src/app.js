

import mongoose from "mongoose";
import express from "express";
import Registration from "./models/registrationModel.js";

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://itsgeekyyashaswi:admin@cluster0.n8f96lb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ",{dbName:"danishDB"}
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Example route to create a new registration
app.get("/register", async (req, res) => {
  try {
    res.send("hello")
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

app.post("/create", async (req, res) => {
  try {
    res.send("hello user created");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
