import React, { useState } from "react";



function EditImageForm({ handleSubmit }) {

  const initialFormData = {
    opacity: "50"
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    //call fn from parent to update image state
  }

  return (
    <div>
      <form className="EditImage" onSubmit={handleSubmit}>
        <label>Opacity:
          <input
            type="range"
            min="1"
            max="100"
            value={formData.opacity}
            className="slider"
            id="opacity"
            name="opacity"
            onChange={handleChange}
          />
        </label>
        <div>
          <button>Submit Creation!</button>
        </div>
      </form>
    </div>
  );
}

export default EditImageForm;
