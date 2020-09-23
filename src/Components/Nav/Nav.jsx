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
      </div>
      <SearchBar />
      <div className="ButtonPosition">
        <button id="Button"> Log in</button>
      </div>
    </div>
  );
}

export default Nav;
