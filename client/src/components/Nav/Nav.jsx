import {Link} from "react-router-dom"
import "./Nav.css";

const Nav = () => {
  return <nav className="navbar">
    <div className="navbar-left-container">
      <p>image</p>
      <h1>Diversified Winers</h1>
    </div>
    <div className="navbar-right-container">
      <Link to="/">
        Home
      </Link>
      <Link to="/wines">
        Browse Wines
      </Link>
      <Link to="/add-wine">
        Add Wine
      </Link>
      <Link to="sign-up">
        Sign Up
      </Link>
      <Link to="sign-in">
        Sign in
      </Link>
    </div>
  </nav>;
};

export default Nav;
