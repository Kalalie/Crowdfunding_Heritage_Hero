import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  const { image } = props;
  return (
    <nav>
      <img className="Logo" src={image} alt="Logo" />
      <Link to="/">Home</Link>
      <Link to="/projects">Project</Link>
      <button id="Button"> Log in</button>
    </nav>
  );
}

export default Nav;
