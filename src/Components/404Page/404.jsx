import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

const NotFound = () => {
  return (
    <div className="text404">
      <h1>404- Page NotFound </h1>
      <p>You may have mistyped the address or the page may have moved.</p>
      <button id="Button404">
        <Link to="/"> Back to homepage </Link>
      </button>
    </div>
  );
};

export default NotFound;
