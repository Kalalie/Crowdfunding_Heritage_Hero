import React from "react";
import "./Logo.css";

function Logo(props) {
  const { image } = props;
  return (
    <div className="logo">
      <img src={image} alt="Logo" />
    </div>
  );
}

export default Logo;
