import React from 'react'
import './ReviewForm.css'

const ReviewForm = ({author, rating, description, onChange, onSubmit}) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input className="add-review-author"
      placeholder="Author"
      value={author}
      name="author"
      required
      onChange={(e) => onChange(e)}
      />
      <input className="add-review-rating"
      placeholder="Rating (1-5)"
      value={rating}
      name="rating"
      required
      onChange={(e) => onChange(e)} />
      <textarea 
      className="add-review-description"
      rows={10}
      placeholder="You can w(h)ine in here..."
      value={description}
      name="description"
      required
      onChange={(e)=>onChange(e)}
      />
      <button type="submit" className="add-review-submit">
        Submit
      </button>
    </form>
  )
}

export default ReviewForm