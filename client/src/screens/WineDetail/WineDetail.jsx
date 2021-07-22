import { useState, useEffect } from "react";
import "./WineDetail.css";
//import { Layout } from "../../components/Layout/Layout";
import { getOneWine, deleteWine, getWines } from "../../services/wines";
import Wine from "../../components/Wine/Wine";
import { useParams, Link  } from "react-router-dom";
 
const WineDetail = (props) => {
  const [wine, setWine ] = useState(null)
  const [wines, setWines ] = useState(null)
  const [isLoaded, setLoaded ] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchWine = async () => {
      const wine = await getOneWine(id)
      setWine(wine)
      setLoaded(true)
    }
    fetchWine()
  }, [id])

  useEffect(() => {
    const fetchWines = async () => {
      const results = await getWines();
      setWines(results);
    };
    fetchWines();
  }, []);

  if(!isLoaded) {
    return <h1>Loading ...</h1>
  }

  return (
   // <Layout user={props.user}> 
        <div className='wine-detail'>
        <img
          className='wine-detail-image'
          src={wine.imgURL}
          alt={wine.name}
        />
        <div className='detail'>
          <div className='name'>{wine.name}</div>
          <div className='vineyard'>{`${wine.vineyard} Vineyard`}</div>
          <div className='year'>{wine.year}</div>
          <div className='description'>{wine.description}</div>
           <div className='button-container'>
            <Link className='edit-button' to={`/wines/${wine._id}/edit`}>
              Edit
            </Link>
            <button
              className='delete-button'
              onClick={() => deleteWine(wine._id)}>
              Delete
            </button>
          </div>
          <div>
            <h1>Related Wines</h1>
            <div className="all-wines">
        {wines.length ? (
          wines.map((wine) => <Wine key={wine._id} wine={wine} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
          </div>
        </div>
      </div>

   // </Layout>
  )
};

export default WineDetail;

