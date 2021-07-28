import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./Rating.css";
const Rating = (props) => {
  const { rating } = props;
  return (
    <div className="rating">
      {rating < 1 ? <AiOutlineStar /> : <AiFillStar />}
      {rating < 2 ? <AiOutlineStar /> : <AiFillStar />}
      {rating < 3 ? <AiOutlineStar /> : <AiFillStar />}
      {rating < 4 ? <AiOutlineStar /> : <AiFillStar />}
      {rating < 5 ? <AiOutlineStar /> : <AiFillStar />}
    </div>
  );
};

export default Rating;
