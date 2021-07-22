import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { verify } from "../../services/users";
import { addWine } from "../../services/wines";
import "./WineAdd.css";

const WineAdd = (props) => {
  const [wine, setWine] = useState({
    name: "",
    vineyard: "",
    year: "",
    imgURL: "",
    description: "",
    type: "",
  });

  const [isCreated, setCreated] = useState(false);
  const [userBool, setUserBool] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const userExists = await verify();
      setUserBool(userExists ? true : false);
    };
    checkUser();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWine({
      ...wine,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await addWine(wine);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/wines`} />;
  }

  return !userBool && userBool !== null ? (
    <Redirect to="/sign-up" />
  ) : (
    <Layout user={props.user}>
      <div className="add-form-container">
        <div className="add-image-container">
          <img className="wine-image" src={wine.imgURL} alt={wine.name} />
          <label className="wine-description-label">About the Wine</label>
          <input
            className="textarea-description"
            value={wine.description}
            name="description"
            required
            autoFocus
            onChange={handleChange}
          />
        </div>
        <form className="add-form" onSubmit={handleSubmit}>
          <label className="wine-name-label">Wine Name</label>
          <input
            className="input-name"
            value={wine.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="vineyard-name-label">Vineyard</label>
          <input
            className="input-vineyard"
            value={wine.vineyard}
            name="vineyard"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="year-label">Year</label>
          <input
            className="input-year"
            value={wine.year}
            name="year"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="image-link-label">Image Link</label>
          <input
            className="input-image-link"
            value={wine.imgURL}
            name="imgURL"
            required
            autoFocus
            onChange={handleChange}
          />
          <select
            className="dropdown-type"
            value={wine.type}
            name="type"
            required
            autoFocus
            onChange={handleChange}
          >
            <option value="dropdown">Select Type</option>
            <option value="red">red</option>
            <option value="white">white</option>
            <option value="specialty">specialty</option>
          </select>
          <button type="submit" className="add-button">
            Add Wine
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default WineAdd;
