import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { getWines } from "../../services/wines";
import { sort } from "../../utils/sort"
import "./FeaturedWines.css"
import FeaturedCard from "../../components/Featured/FeaturedCard";

const FeaturedWines = () => {
  const [sortedArray, setSortedArray] = useState([]);


  useEffect(() => {
    const getResults = async () => {
      const getSortedArray = await getWines();
      setSortedArray(sort(getSortedArray, "rating"));
    };
    getResults();
  }, []);


  return (
    <Layout>
      <div className="image-container-top-five">
        <div className="top-five-image">
          <img src="/img/Topfive.jpg" alt="top five trophy"/>
        </div>
        <div className="top-five-intro">
          <div className="top-five-text">
          <h3>You ranked them, we tested them.</h3>
          <br />
          <h3>Presenting the Winer Community top 5!</h3>
          </div>
        </div>
      </div>
      <div className="featured-wines">
        {sortedArray.length ? (
          sortedArray.splice(0,5).map((review, index) => <FeaturedCard key={review._id} review={review} rank={index + 1}/>)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </Layout>
  )
}

export default FeaturedWines