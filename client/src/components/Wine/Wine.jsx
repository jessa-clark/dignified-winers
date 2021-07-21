const Wine = (props) => {
  return (
    <article className="wine">
      <h3>{props.wine.name}</h3>
      <img src={props.wine.imgURL} alt={props.wine.name} />
      <h5>{props.wine.year}</h5>
    </article>
  );
};

export default Wine;
