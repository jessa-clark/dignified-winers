import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import AOS from 'aos';

import { getWines } from "../../services/wines";
import Wine from "../../components/Wine/Wine";
import Layout from "../../components/Layout/Layout";

import 'aos/dist/aos.css';
import "./Home.css";

const Home = () => {
  const history = useHistory();
  const [wineList, setWineList] = useState([]);
  const [singleWine, setSingleWine] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const ipad = 1025;
  AOS.init();

  useEffect(() => {
    const settingBrokenList = (arr, size) => {
      let dividedWineList = [];
      while (arr.length > size) {
        dividedWineList.push(arr.splice(0, size));
      }
      return dividedWineList;
    };

    const fetchWines = async () => {
      const allWines = await getWines();
      setWineList(settingBrokenList([...allWines], 3));

      const singleList = settingBrokenList([...allWines], 3)[0];
      setSingleWine([...singleList]);
    };
    fetchWines();

    //  making window size a state for conditional rendering of carousel items
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const takeToWines = () => {
    setTimeout(() => {
      history.push("/wines");
    }, 1000);
  };
  const takeToSignUp = () => {
    setTimeout(() => {
      history.push("/sign-up");
    }, 1000);
  };

  return (
    <Layout>
      <section className="landing-section">
        {width < ipad ? (
          <div className="landing-container">
            <h2 className="landing-text">Welcome to the world of wine.</h2>
            <button onClick={takeToWines} className="landing-button">
              Browse our Wines
            </button>
          </div>
        ) : (
          <button onClick={takeToWines} className="landing-button">
            Browse our Wines
          </button>
        )}
      </section>
      <section className="who-section">
        <div className="who-container">
          <div
            className="who-image"
            data-aos={width > ipad ? "fade-right" : "fade-down"}
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <img src="/img/TheWiners.jpeg" alt="4 wine glasses cheering" />
          </div>
          <div
            className="who-content"
            data-aos={width > ipad ? "fade-left" : "fade-up"}
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
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
      </section>
      <section className="winner-section">
        <div className="winner-wines-container">
          <h2 className="winner-wines-title">Winner Wines</h2>
          <p className="winner-wines-text">
            From the taste to the group, only wines worth your time end up on
            our Featured Wines
          </p>
          <Carousel className="caro">
            {width > ipad
              ? wineList.map((list, index) => (
                  <Carousel.Item key={index}>
                    <div className="carousel-row" key={index + 100}>
                      {list.map((wine, index) => (
                        <Wine key={wine._id} wine={wine} />
                      ))}
                    </div>
                  </Carousel.Item>
                ))
              : singleWine.map((wine, index) => (
                  <Carousel.Item key={index}>
                    <div className="carousel-row" key={index + 100}>
                      <Wine key={wine._id} wine={wine} />
                    </div>
                  </Carousel.Item>
                ))}
          </Carousel>
          <button onClick={takeToWines} className="who-button">
            See All Wines
          </button>
        </div>
      </section>
      <section className="community-section">
        <div className="community-content"  data-aos="fade-in"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
          <h2 className="community-title">Wine With Us</h2>
          <p className="community-text">
            Wine is its most beautiful, when its shared among friends. Whether
            there’s a new vineyard that needs to be heard, or a terrible taste
            you need to get off your chest... <br />
            <br />
            We’ll Wine With You.
          </p>
          <button onClick={takeToSignUp} className="community-button">
            Join our community
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
