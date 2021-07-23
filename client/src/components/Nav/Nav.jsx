import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { verify } from "../../services/users";

// images

import "./Nav.css";

const Nav = () => {
  const [userExists, setUserExists] = useState(null);
  useEffect(() => {
    const checkSigned = async () => {
      const valid = await verify();
      setUserExists(valid ? true : false);
    };
    checkSigned();
  }, []);
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-left-container">
        <img
          className="navbar-logo"
          src="/img/DWCLogo.png"
          alt="dignified winers logo"
        />
        <h1 className="navbar-title">Dignified Winers</h1>
      </Link>
      <div className="navbar-right-container">
        <Link to="/">Home</Link>
        <Link to="/wines">Browse Wines</Link>
        <Link to="/add-wine">Add Wine</Link>
        {userExists ? (
          <Link to="/sign-out">Sign Out</Link>
        ) : (
          <Link to="/sign-up">Log In/Register</Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
