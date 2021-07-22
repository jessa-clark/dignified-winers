import { Link } from "react-router-dom";

// images

import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-left-container">
        <img className="navbar-logo" src="/img/DWCLogo.png" alt="diversified winers logo"/>
        <h1 className="navbar-title">Dignified Winers</h1>
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
