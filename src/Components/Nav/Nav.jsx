import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import SearchBar from "../SearchBar/SearchBar";

function Nav(props) {
  const { image } = props;
  return (
    <div className="nav">
      <div>
        <img className="Logo" src={image} alt="Logo" />
      </div>
      <div className="Menu">
        <Link to="/">Home</Link>
        <div className="ButtonPosition">
          <SearchBar />
          
          <button className="Button">
            <Link to="/login">Login</Link>
            {/* {loggedIn ? <> : <>} */}
          </button>
          </div>
          <div>
          <button className="Button">
            <Link to="/Signup">Sign up</Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
