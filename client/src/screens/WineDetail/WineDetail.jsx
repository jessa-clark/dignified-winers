import { useState, useEffect } from "react";
import "./WineDetail.css";
import Layout from "../../components/Layout/Layout";
import { getOneWine, deleteWine, getWines } from "../../services/wines";
import Wine from "../../components/Wine/Wine";
import { useParams, Link, useHistory  } from "react-router-dom";
 
const WineDetail = (props) => {
  const [wine, setWine ] = useState(null)
  const [wines, setWines ] = useState(null)
  const [isLoaded, setLoaded ] = useState(false)
  const history = useHistory();
  const { id } = useParams();

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

  const handleSubmit = () => {
    const deleteOneWine = async () => {
        const deleted = await deleteWine(id)
       setTimeout(() => {
        history.push("/wines");
      }, 500);
    };
    deleteOneWine();
  };

  return (
   <Layout user={props.user}> 
        <div className='wine-detail'>
        <img
          className='wine-detail-image'
          src={wine.imgURL}
          alt={wine.name}
        />
        <div className='detail'>
          <div className='wine-detail-name'>{wine.name}</div>
          <div className='wine-detail-vineyard'>{`${wine.vineyard} Vineyard`}</div>
          <div className='wine-detail-year'>{wine.year}</div>
          <div className='wine-detail-description'>{wine.description}</div>
           <div className='wine-detail-button-container'>
            <Link className='wine-detail-edit-button' to={`/wines/edit/${id}`}>
              Edit
            </Link>
            <button
              className='wine-detail-delete-button'
              onClick={handleSubmit}>
              Delete
            </button>
          </div>
          <div>
            <h1>Related Wines</h1>
            <div className="all-wines-detail">
        {wines?.length ? (
          [...wines].splice(0,4).map((wine) => <Wine key={wine._id} wine={wine} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
          </div>
        </div>
      </div>

   </Layout>
  )
};

export default WineDetail;

