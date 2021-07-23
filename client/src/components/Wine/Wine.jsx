import { Link } from "react-router-dom";
import "./Wine.css";

const Wine = (props) => {
  const { _id, name, imgURL, year } = props.wine;
  return (
    <Link className="wine" to={`/wines/${_id}`}>
      <article>
        <h3>{name}</h3>
        <img src={imgURL} alt={name} />
        <h5>{year}</h5>
      </article>
    </Link>
  );
};

export default Wine;
