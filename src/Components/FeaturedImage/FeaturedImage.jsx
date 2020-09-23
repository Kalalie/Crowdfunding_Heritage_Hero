import React from "react";
import "./FeaturedImage.css";

function FeaturedImage(props) {
  //variables
  const { image } = props;

  // template
  return <img className="featured-image" src={image} alt="Featured Image" />;
}

export default FeaturedImage;
