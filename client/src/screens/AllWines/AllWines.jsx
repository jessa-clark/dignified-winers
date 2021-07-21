import { useEffect, useState } from "react";
import { getWines } from "../../services/wines";
import Wine from "../../components/Wine/Wine";
import "./AllWines.css";

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
    <div className="all-wines">
      {wines.length ? (
        wines.map((wine) => <Wine key={wine._id} wine={wine} />)
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default AllWines;
