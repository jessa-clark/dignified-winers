import { useState, useEffect } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "./WineDetail.css";
import Layout from "../../components/Layout/Layout";
import {
  getOneWine,
  deleteWine,
  getWines,
  editWine,
} from "../../services/wines";
import Wine from "../../components/Wine/Wine";
import { verify } from "../../services/users";
import { useParams, Link, useHistory } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import Review from "../../components/Review/Review";
import ReviewForm from "../../components/Review/ReviewForm";

const WineDetail = (props) => {
  const { user } = props;
  const [wine, setWine] = useState(null);
  const [wines, setWines] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [userExists, setUserExists] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [review, setReview] = useState({
    author: user?.username,
    rating: 0,
    description: "",
  });
  const history = useHistory();
  const { id } = useParams();



  useEffect(() => {
    const fetchWine = async () => {
      const wine = await getOneWine(id);
      setWine(wine);
      setLoaded(true);
    };
    fetchWine();
  }, [id, toggleFetch]);

  useEffect(() => {
    const fetchWines = async () => {
      const results = await getWines();
      setWines(results);
    };
    fetchWines();
  }, []);

  useEffect(() => {
    const checkSigned = async () => {
      const valid = await verify();
      setUserExists(valid ? true : false);
    };
    checkSigned();
  }, []);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }


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
        setToggleFetch(!toggleFetch);
      }
    };
    addReview();
  };

  const handleSubmit = () => {
    const deleteOneWine = async () => {
      await deleteWine(id);
      setTimeout(() => {
        history.push("/wines");
      }, 500);
    };
    deleteOneWine();
  };

  return (
    <Layout user={props.user}>
      <section className="detail-section">
        <div className="wine-detail-image">
          <img src={wine.imgURL} alt={wine.name} />
        </div>
        <div className="wine-detail-text">
          <div className="wine-detail-name">{wine.name}</div>
          <div className="wine-detail-vineyard">
            {" "}
            {wine.vineyard.toLowerCase().includes("vineyard")
              ? wine.vineyard
              : `${wine.vineyard} Vineyard`}{" "}
            • {wine.year}
          </div>
          <div className="wine-detail-rating">
            <Rating rating={wine.rating} /> &nbsp; {`${wine.rating} out of 5`}
          </div>
          <div className="wine-detail-description">{wine.description}</div>
          <div className="wine-detail-button-container">
            {userExists ? (
              <>
                <Link
                  className="wine-detail-edit-button"
                  to={`/wines/edit/${id}`}
                >
                  Edit
                </Link>
                <Link
                  className="wine-detail-delete-button"
                  to="/wines"
                  onClick={handleSubmit}
                >
                  Delete
                </Link>
              </>
            ) : (
              <Link className="sign-up-to-wine-button" to="/sign-up">
                Sign up to Wine
              </Link>
            )}
          </div>
        </div>
      </section>
      <section className="reviews-section">
        <div className="review-header">
          <h1>Reviews</h1> {}
          {showForm ? (
            <AiOutlineMinusCircle
              onClick={() => setShowForm((curr) => !curr)}
            />
          ) : (
            <AiOutlinePlusCircle onClick={() => setShowForm((curr) => !curr)} />
          )}
        </div>
        <h6>Click the + icon above to add your own review!</h6>
        {showForm ? (
          <ReviewForm
            handleChange={handleChange}
            review={review}
            submitReview={submitReview}
          />
        ) : (
          <></>
        )}

        <div className="all-reviews">
          {wine.reviews.map((review) => (
            <Review key={review._id} review={review} wine={wine} setToggleFetch={setToggleFetch} user={user}/>
          ))}
        </div>
      </section>
      <section className="related-section">
        <h1 className="related">Related Wines</h1>
        <div className="all-wines-detail">
          {wines?.length ? (
            [...wines]
              .splice(0, 4)
              .map((wine) => <Wine key={wine._id} wine={wine} />)
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default WineDetail;
