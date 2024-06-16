// registrationModel.js

import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Define the schema
const registrationSchema = new Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    date: { type: Date, required: true },
    message: { type: String, required: true },
    services: {
      type: String,
      enum: [
        "WeddingCoverage",
        "Pre-wedding",
        "MaternityPhotoshoot",
        "Anniversary",
        "CorporateShoot",
        "ProductShoot",
        "ModalingShoot",
        "KidsShoot",
        "Birthday",
      ],
      required: true,
    },
    reachedThrough: { type: String, required: true },
    query: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Create the model
const Registration = model("Registration", registrationSchema);

export default Registration;
