import { Link } from "react-router-dom";
import "./Wine.css";

const Wine = (props) => {
  // console.log(props.wine);
  return (
    <Link className="wine" to={`/wines/${props.wine._id}`}>
      <article>
        <div className="wine-header">
          <h3>{props.wine.name}</h3>
        </div>
        <div className="wine-body-image">
          <img src={props.wine.imgURL} alt={props.wine.name} />
        </div>
        <div className="wine-footer">
          <p>{props.wine.vineyard}</p>
          <h5>{props.wine.year}</h5>
        </div>
      </article>
    </Link>
  );
};

export default Wine;
