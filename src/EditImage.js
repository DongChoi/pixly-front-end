import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditImageForm from "./EditImageForm";
import ImageKeyContext from "./ImageContext";
import Photo from "./Photo";

function EditImage({ getImageById }) {
  const navigate = useNavigate();
  //   const { imageKey } = useContext(ImageKeyContext);
  const { key } = useParams();
  const photo = getImageById(key);
  console.log("Edit Image: ", photo);

  // function handleSubmit(evt) {
  //   //POST REQUEST TO DATABASE
  //   evt.preventDefault()
  //   //navigate("/");
  // }

  return (
    <div>
      <Photo image={photo} />
      <EditImageForm />
    </div>
  );
}

export default EditImage;
