import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditImageForm from "./EditImageForm";
import Photo from "./Photo";

function EditImage({ image }) {
  const navigate = useNavigate();
  const location = useLocation();
  image = location.state;
  function handleSubmit() {
    //POST REQUEST TO DATABASE
    navigate("/");
  }

  return (
    <div>
      <Photo image={image} />
      <EditImageForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default EditImage;
