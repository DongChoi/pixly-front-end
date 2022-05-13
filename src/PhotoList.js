import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Photo from "./Photo";

/** Displays a list of Photo components
 *
 * props: photos - array of photo objects
 *
 * state: none
 *
 */
function PhotoList({ images }) {
  const widthSize = "650";

  return (
    <div className="Pixly-PhotoList">
      <h1>View our pretty pics</h1>
      {images.map((image) => (
        <Link
          to={`/images/${image.imageKey}`}
          key={image.imageKey}
          className="Photo"
        >
          <Photo image={image} key={image.imageKey} widthSize={widthSize} />
        </Link>
      ))}
    </div>
  );
}

export default PhotoList;
