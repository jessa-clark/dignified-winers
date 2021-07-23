import { useEffect, useState } from "react";
import { getWines } from "../../services/wines";
import Wine from "../../components/Wine/Wine";
import "./AllWines.css";
import Layout from "../../components/Layout/Layout";

const AllWines = () => {
  const [wines, setWines] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      const results = await getWines();
      setWines(results);
    };
    getResults();
  }, []);
  return (
    <Layout>
      <div className="search-area">
        <input type="text" />
      </div>
      <div className="all-wines">
        {wines.length ? (
          wines.map((wine) => <Wine key={wine._id} wine={wine} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </Layout>
  );
};

export default AllWines;
