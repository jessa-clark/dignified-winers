import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { verify } from "../../services/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// images

import "./Nav.css";

const Nav = () => {
  const [userExists, setUserExists] = useState(null);
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => {
    const checkSigned = async () => {
      const valid = await verify();
      setUserExists(valid ? true : false);
    };
    checkSigned();
  }, []);

  return (
    <header>
      <FontAwesomeIcon
        className="fa-bars"
        icon={faBars}
        onClick={() => setShowMenu(!showMenu)}
      />
      <Link to="/" className="navbar-left-container">
        <img
          className="navbar-logo"
          src="/img/DWCLogo.png"
          alt="dignified winers logo"
        />
        <h1 className="navbar-title">Dignified Winers</h1>
      </Link>
      <nav className="navbar">
        <div className="navbar-right-container">
          <Link to="/">Home</Link>
          <Link to="/wines">Browse Wines</Link>
          {userExists ? (
            <>
              <Link to="/add-wine">Add Wine</Link>
              <Link to="/sign-out">Sign Out</Link>
            </>
          ) : (
            <Link to="/sign-up">Log In/Register</Link>
          )}
        </div>


        {showMenu ?  <div className="mobile-navbar-right-container">
          <Link to="/">Home</Link>
          <Link to="/wines">Browse Wines</Link>
          {userExists ? (
            <>
              <Link to="/add-wine">Add Wine</Link>
              <Link to="/sign-out">Sign Out</Link>
            </>
          ) : (
            <Link to="/sign-up">Log In/Register</Link>
          )}
        </div> : <></> }
      </nav>

    </header>
  );
};

export default Nav;
