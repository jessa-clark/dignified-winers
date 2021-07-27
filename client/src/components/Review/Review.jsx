import React from 'react'
import Rating from "../Rating/Rating";
import "./Review.css";

const Review = (props) => {
  const { author, rating, description } = props.review;
  return (
    <article className="review">
      <h3>{author}</h3>
      <Rating className="review-rating" rating={rating} />
      <p>{description}</p>
    </article>
  );
};

export default Review;
