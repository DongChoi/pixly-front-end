import React from "react";
import Photo from "./Photo";

/** Displays a list of Photo components
 *
 * props: photos - array of photo objects
 *
 * state: none
 *
 */
function PhotoList({ photos }) {
  return (
    <div>
      <h1>View our pretty pics</h1>
      {photos.map( photo =>  <Photo image={photo} /> ) }
    </div>
  );
}

export default PhotoList