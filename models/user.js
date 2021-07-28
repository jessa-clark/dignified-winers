import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, "already exists"],
    },
    email: { type: String, required: true, unique: [true, "already exists"] },
    //for select false, on information requests, password_digest will not be supplied
    password_digest: { type: String, required: true, select: false },

  },
  { timestamps: true }
);

export default mongoose.model("users", User);
