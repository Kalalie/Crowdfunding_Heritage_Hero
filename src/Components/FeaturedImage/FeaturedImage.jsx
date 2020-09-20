import React from "react";

function FeaturedImage(props) {
  //variables
  const { image } = props;

  // template
  return <img className="featured-image" src={image} alt="Featured Image" />;
}

export default FeaturedImage;
