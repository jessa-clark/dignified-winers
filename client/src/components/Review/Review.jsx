import Rating from "../Rating/Rating";
import { useParams } from "react-router-dom";

import "./Review.css";
import { editWine } from "../../services/wines";

const Review = (props) => {
  const { author, rating, description, _id } = props.review;
  const { wine, setToggleFetch, user } = props


  const { id } = useParams();

  const deleteReview = (e) => {
    e.preventDefault();
    const index = wine.reviews.findIndex((review) => review._id === _id);
    const newReview = [...wine.reviews];
    newReview.splice(index, 1);
    const newWine = {
      ...wine,
      reviews: newReview,
    };

    const removeReview = async () => {
      const updated = await editWine(id, newWine);
      if (updated) {
        setToggleFetch( (curr) => !curr);
      }
    };
    removeReview();
  };

  return (
    <article className="review">
      <h3>{author}</h3>
      <Rating className="review-rating" rating={rating} />
      <p>{description}</p>
      {user === author ? <button className="review-wine-delete-button" onClick={deleteReview}>
        Delete
      </button> : <></>}
    </article>
  );
};

export default Review;
