import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { getWines } from "../../services/wines";
import { sort } from "../../utils/sort"
import "./FeaturedWines.css"
import FeaturedCard from "../../components/Featured/FeaturedCard";

const FeaturedWines = (props) => {
  const [sortedArray, setSortedArray] = useState([]);


  useEffect(() => {
    const getResults = async () => {
      const getSortedArray = await getWines();
      setSortedArray(sort(getSortedArray, "rating"));
    };
    getResults();
  }, []);
  console.log(sortedArray)
  return (
    <Layout>
      <div className="image-container-top-5">
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