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
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    reviews: [
      {
        author: { type: String, required: true },
        rating: { type: Number, required: true },
        description: { type: String, required: true },
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Wine.virtual("rating").get(() => {
  //taking average of reviews
  return (
    this.reviews.reduce((total, review) => total + review.rating, 0) /
    this.reviews.length
  );
});

export default mongoose.model("wines", Wine);
