import React from 'react'
import Rating from "../Rating/Rating";
import "./FeaturedCard.css"


const FeaturedCard = (props) => {
  const { rating, imgURL, name, description } = props.review;
  return (
    <article className="featured-card">
      <img src={imgURL} alt="featured wine" className="featured-card-image"/>
      <div className="featured-card-text">
      <h3>{`#${props.rank} ${name}`}</h3>
      <Rating className="review-rating" rating={rating} />
      <p>{description}</p>
      </div>
    </article>
  );
};

export default FeaturedCard;