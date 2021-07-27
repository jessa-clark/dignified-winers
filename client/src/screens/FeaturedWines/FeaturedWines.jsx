import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { getWines } from "../../services/wines";
import FeaturedCard from "../../components/Featured/FeaturedCard";

const FeaturedWines = (props) => {
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    const getResults = async () => {
      const getReviews = await getWines();
      setReviews(getReviews);
    };
    getResults();
  }, []);

  return (
    <Layout>
      <div className="featured-wines">
        {reviews.length ? (
          reviews.map((review) => <FeaturedCard key={review._id} review={review} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </Layout>
  )
}

export default FeaturedWines