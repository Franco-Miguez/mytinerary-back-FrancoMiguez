import { Schema, model, Types } from "mongoose";

let collection = "cities";

let schema = new Schema(
  {
    city: { type: String, required: true },
    img: { type: String, required: true },
    country: { type: String, required: true },
    language: { type: String, required: true },
    currency: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const City = model(collection, schema);

export default City;
