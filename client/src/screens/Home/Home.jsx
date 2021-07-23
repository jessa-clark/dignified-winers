import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { getWines } from "../../services/wines";

import Wine from "../../components/Wine/Wine";
import Layout from "../../components/Layout/Layout";
import { Carousel, Row, Col, Container } from "react-bootstrap";

import "./Home.css";

const Home = () => {
  const history = useHistory();
  const [wineList, setWineList] = useState([]);
  const [brokenWineList, setBrokenWineList] = useState([]);

  // useEffect(() => {
  //   const fetchWines =  async () => {
  //     const allWines = await getWines();
  //     setWineList(allWines)
  //   }
  //   fetchWines();

  // },[])
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
    };
    fetchWines();
    // const splitList = splitWineList(wineList, 3);
  }, []);

  console.log("broken:", brokenWineList);
  console.log(wineList);
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

  console.log(wineList);
  return (
    <Layout>
      <section className="landing-section">
        <button onClick={takeToWines} className="landing-button">
          Browse our Wines
        </button>
      </section>
      <section className="who-section">
        <div className="who-container">
          <img
            className="who-image"
            src="/img/TheWiners.jpeg"
            alt="4 wine glasses cheering"
          />
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
          <p className="winner-wines-text">
            From the taste to the group, only wines worth your time end up on
            our Featured Wines
          </p>
          <Carousel>
            {wineList.map((list, index) => (
              <Carousel.Item key={index}>
                    <Row>
                  {/* <Container> */}


                  {list.map((wine,index) => (
                <Col>
                    <Wine key={wine._id} wine={wine} />
                </Col>
                    
                    ))}
                  {/* </Container> */}
                    </Row>
              </Carousel.Item>
            ))}
          </Carousel>
          <button onClick={takeToWines} className="who-button">
            See All Wines
          </button>
        </div>
      </section>
      <section className="community-section">
        <div className="community-content">
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
