import React from "react";

function Photo({ image, widthSize }) {
  return (
    <div>
      {widthSize ? (
        <img src={image.imageUrl} alt="" width={widthSize} />
      ) : (
        <img src={image.imageUrl} alt="" />
      )}
    </div>
  );
}

export default Photo;
