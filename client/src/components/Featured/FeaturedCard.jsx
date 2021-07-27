import React from 'react'
import Rating from "../Rating/Rating";
import "./FeaturedCard.css"


const FeaturedCard = (props) => {
  const { rating, imgURL, name, description } = props.review;
  return (
    <article className="featured-card">
      <img src={imgURL} className="featured-card-image"/>
      <div className="featured-card-text">
      <h3>{name}</h3>
      <Rating className="review-rating" rating={rating} />
      <p>{description}</p>
      </div>
    </article>
  );
};

export default FeaturedCard;