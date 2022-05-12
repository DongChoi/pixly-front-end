import React from "react";

function Photo({ image }) {
  return (
    <div>
      <img src={image.image_url} alt="" />
    </div>
  );
}

export default Photo;
