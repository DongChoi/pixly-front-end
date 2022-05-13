import React from "react";
import { useLocation } from "react-router-dom";

function Photo({ image }) {
  const location = useLocation();
  if (!image) {
    image = location.state.image;
  }

  return (
    <div>
      <img src={image.imageUrl} alt="" />
    </div>
  );
}

export default Photo;
