import { useEffect, useState } from "react";

import { getWines } from "../../services/wines";
import Wine from "../../components/Wine/Wine";
import "./AllWines.css";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";

const AllWines = () => {
  const [wines, setWines] = useState([]);
  const [wineList, setWineList] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      const results = await getWines();
      setWines(results);
    };
    getResults();
  }, []);
  return (
    <Layout>
      <Search wines={wines} setWineList={setWineList} />
      <Sort wines={wines} setWineList={setWineList} />
      <div className="all-wines">
        {wineList.length ? (
          wineList.map((wine) => <Wine key={wine._id} wine={wine} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </Layout>
  );
};

export default AllWines;
