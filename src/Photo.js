import React from "react";

function Photo({ image }) {

  console.log(image)
  return (
    <div>
      <img src={image.imageUrl} alt="" />
    </div>
  );
}

export default Photo;
