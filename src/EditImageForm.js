import React from "react";

function EditImageForm({ handleSubmit }) {
  return (
    <div>
      <form className="EditImage" onSubmit={handleSubmit()}>
        <label>Opacity:</label>
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          className="slider"
          id="myRange"
        />
        <div>
          <button>Submit Creation!</button>
        </div>
      </form>
    </div>
  );
}

export default EditImageForm;
