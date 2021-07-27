<<<<<<< HEAD
import React from 'react'
import './ReviewForm.css'

const ReviewForm = ({author, rating, description, onChange, onSubmit}) => {
=======
import "./ReviewForm.css";
const ReviewForm = ({ review, handleChange, submitReview }) => {
>>>>>>> 55e0369917d56c08b970b308eccb63143d7464cd
  return (
    <form className="review-form" onSubmit={submitReview}>
      <input
        type="number"
        className="add-review-rating"
        min="0"
        max="5"
        value={review.rating}
        name="rating"
        required
        onChange={handleChange}
      />
      <textarea
        className="add-review-description"
        placeholder="You can w(h)ine in here..."
        value={review.description}
        name="description"
        required
        onChange={handleChange}
      />
      <button type="submit" className="add-review-submit">
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
