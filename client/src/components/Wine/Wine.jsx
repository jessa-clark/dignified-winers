import { Link } from "react-router-dom";
import "./Wine.css";

const Wine = (props) => {
  const { _id, name, vineyard, imgURL, year } = props.wine;
  return (
    <Link className="wine" to={`/wines/${_id}`}>
      <article>
        <div className="wine-header">
          <h3>{name}</h3>
          <p>{vineyard}</p>
        </div>
        <img src={imgURL} alt={name} />
        <h5>{year}</h5>
      </article>
    </Link>
  );
};

export default Wine;
