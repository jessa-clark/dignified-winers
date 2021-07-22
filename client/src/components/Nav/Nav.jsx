import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-left-container">
        {/* <div className="navbar-left-container"> */}
          <p>image</p>
          <h1>Diversified Winers</h1>
        {/* </div> */}
      </Link>
      <div className="navbar-right-container">
        <Link to="/">Home</Link>
        <Link to="/wines">Browse Wines</Link>
        <Link to="/add-wine">Add Wine</Link>
        <Link to="sign-up">Sign Up</Link>
        <Link to="sign-in">Sign in</Link>
        <Link to="/edit/60f8b7f25ae7890dd6711ad1">Edit</Link>
        <Link to="/wines/60f8b7f25ae7890dd6711ad1">View One</Link>
      </div>
    </nav>
  );
};

export default Nav;
