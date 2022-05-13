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
  return (
    <div>
      <h1>View our pretty pics</h1>
      {images.map((image) => (
        <Link
          to={`/images/${image.imageKey}`}
          state={{ image: image }}
          key={image.imageKey}
        >
          <Photo image={image} key={image.imageKey} />
        </Link>
      ))}
    </div>
  );
}

export default PhotoList;
