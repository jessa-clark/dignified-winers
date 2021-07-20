import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Wine = new Schema(
  {
    name: { type: String, required: true },
    vineyard: { type: String, required: true },
    year: { type: Number, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("wines", Wine);
