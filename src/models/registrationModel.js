// registrationModel.js

import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Define the schema
const registrationSchema = new Schema(
  {
    name: { type: String, required: true },

    email: { type: String },
    phoneNumber: { type: String, required: true },
    dateOfEvent: { type: Date, default: Date.now },
    message: { type: String },
    services: {
      type: [String],
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
      default: [],
    },
    reachedThrough: { type: String },
    query: { type: String },
  },
  {
    timestamps: true,
  }
);

// Create the model
const Registration = model("Registration", registrationSchema);

export default Registration;
