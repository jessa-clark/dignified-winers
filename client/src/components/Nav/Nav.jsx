import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { verify } from "../../services/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
 
// images

import "./Nav.css";

const Nav = () => {
  const [visible, setVisible] = useState(true);
  const [userExists, setUserExists] = useState(null);
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => {
    const checkSigned = async () => {
      const valid = await verify();
      setUserExists(valid ? true : false);
    };
    checkSigned();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // if we're at desktop size
      if (window.innerWidth > 425) {
        // make the nav visible
        setVisible(true);
        // untoggle the hamburger menu 
        setShowMenu(false);
      } else {
      // otherwise...
        // make the nav invisible
        setVisible(false);
      }
    }
    // add an event listener to the resize event on the window
    window.addEventListener('resize', handleResize);
    // unmounts we'll remove that event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);


  return (
    <header>
      <FontAwesomeIcon
        className={showMenu ? `fa-times` : `fa-bars`}
        icon={showMenu ? faTimes : faBars }
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
          { userExists ? (
            <>
              <Link to="/add-wine">Add Wine</Link>
              <Link to="/sign-out">Sign Out</Link>
            </>
          ) : (
            <Link to="/sign-up">Log In/Register</Link>
          )}
        </div>


        {showMenu ?  <div className="mobile-navbar-right-container">
           <Link to="/" className="nav-link">Home</Link>
          <Link to="/wines" className="nav-link">Browse Wines</Link> 
          {userExists ? (
            <>
              <Link to="/add-wine" className="nav-link">Add Wine</Link>
              <Link to="/sign-out" className="nav-link">Sign Out</Link>
            </>
          ) : (
            <Link to="/sign-up" className="nav-link">Log In/Register</Link>
          )} 
        </div> : <></> }
      </nav>

    </header>
  );
};

export default Nav;
