import { useState, useEffect } from "react";
import "./WineEdit.css";
import { useParams, Redirect } from "react-router";
import Layout from "../../components/Layout/Layout";
import { getOneWine, editWine } from "../../services/wines";
import { verify } from "../../services/users";

const WineEdit = (props) => {
  const [wine, setWine] = useState({
    name: "",
    vineyard: "",
    year: "",
    imgURL: "",
    description: "",
    type: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  const [userBool, setUserBool] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchWine = async () => {
      const wine = await getOneWine(id);
      setWine(wine);
    };
    const checkUser = async () => {
      const userExists = await verify();
      setUserBool(userExists ? true : false);
    };
    checkUser();
    fetchWine();
  }, [id, userBool]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWine({
      ...wine,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await editWine(id, wine);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/wines/${id}`} />;
  }

  return !userBool && userBool !== null ? (
    <Redirect to="/sign-up" />
  ) : (
    <Layout user={props.user}>
      <div className="wine-edit">
        <div className="image-container">
          <img className="edit-wine-image" src={wine.imgURL} alt={wine.name} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={wine.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="edit-input-name"
            placeholder="Wine Name"
            value={wine.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="edit-input-vineyard"
            placeholder="Vineyard Name"
            value={wine.vineyard}
            name="vineyard"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="edit-input-year"
            placeholder="Year"
            value={wine.year}
            name="year"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="edit-textarea-description"
            rows={10}
            placeholder="Description"
            value={wine.description}
            name="description"
            required
            autoFocus
            onChange={handleChange}
          />
          <select
            className="edit-dropdown-type"
            placeholder="Type"
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
            Update
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default WineEdit;
