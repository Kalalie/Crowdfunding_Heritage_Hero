import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Nav.css";
import SearchBar from "../SearchBar/SearchBar";

function Nav(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    token != null ? setLoggedIn(true) : setLoggedIn(false);
  }, [location]);

  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  const { image } = props;

  return (
    <div className="nav">
      <div>
        <img className="Logo" src={image} alt="Logo" />
      </div>
      <div className="Menu">
        <Link to="/">Home</Link>
        <div>
          <Link to="/create-project">Create Project</Link>
        </div>
        <div className="ButtonPosition">
          <SearchBar />
          {!loggedIn ? (
            <>
              <button className="Button">
                <Link to="/login">Login</Link>
              </button>
              <button className="Button">
                <Link to="/Signup">Sign up</Link>
              </button>
            </>
          ) : (
            <button className="Button">
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
