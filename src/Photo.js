import React from "react";

function Photo({ image }) {
  return (
    <div>
      <img src={image.imageUrl} alt="" />
    </div>
  );
}

export default Photo;
