import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Home.css";

const Home = () => {
  const history = useHistory();
  const takeToWines = () => {
    setTimeout(() => {
      history.push("/wines");
    }, 1000);
  };
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
      <section className="who-section">
        <div className="who-container">
          <img className="who-image" src="/img/TheWiners.jpeg"/>
          <div className="who-content">
            <h2 className="who-content-title">Who are the Winers?</h2>
            <p className="who-content-text">
              The Dignified Winers are an elite group of self-proclaimed
              sommeliers. We take pride in our gifted abilities to break down
              the craft of a wine. Before there is perfection, there is a
              process, built by generations of love and craftsmanship. This is
              what we believe defines the wine, tasting the definition is what
              makes Us born to be Winers.
            </p>
          </div>
        </div>
        <div className="winner-wines-container">
          <h2 className="winner-wines-title">Winner Wines</h2>
          <p className="winner-wines-text">From the taste to the group, only wines worth your time end up on our Featured Wines</p>
          <h2>I'm a carousel</h2>
          <button onClick={takeToWines} className="landing-button">See All Wines</button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
