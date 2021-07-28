import { useState } from "react";
import { editWine } from "../../services/wines"
import "./ReviewForm.css";

const ReviewForm = (props) => {
  const {user, wine, setToggleFetch, id, setShowForm} = props;
  const [review, setReview] = useState({
    author: user?.username,
    rating: 0,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const submitReview = (e) => {
    e.preventDefault();
    const newReviews = [...wine.reviews, review];
    const newWine = {
      ...wine,
      reviews: newReviews,
    };
    const addReview = async () => {
      const updated = await editWine(id, newWine);
      if (updated) {
        setToggleFetch((curr) => !curr);
        setReview({...review, rating: 0, description: ""})
        setShowForm((curr) => !curr);
      }
    };
    addReview();
  };
  
  
  
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
      <button type="submit" className="add-review-button">
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
