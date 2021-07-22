import { useHistory } from "react";
import Layout from "../../components/Layout/Layout";
import "./Home.css";

const Home = () => {
  const takeToWines = () => {};
  return (
    <Layout>
      <section className="landing-section">
        <div className="landing-greeting">
          <h2 className="landing-text">Welcome to the World of Wine</h2>
          <button onClick={takeToWines} className="landing-button">
            Browse our Wines
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
