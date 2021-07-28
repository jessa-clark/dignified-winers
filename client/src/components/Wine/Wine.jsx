import { Link } from "react-router-dom";
import "./Wine.css";

const Wine = (props) => {
  const { _id, imgURL, name, vineyard, year} = props.wine;
  return (
    <Link className="wine" to={`/wines/${_id}`}>
      <article>
        <div className="wine-header">
          <h3>{name}</h3>
        </div>
        <div className="wine-body-image">
          <img src={imgURL} alt={name} />
        </div>
        <div className="wine-footer">
          <p>{vineyard}</p>
          <h5>{year}</h5>
        </div>
      </article>
    </Link>
  );
};

export default Wine;
