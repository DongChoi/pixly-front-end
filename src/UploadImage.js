import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadImage({ upload }) {
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    //   console.log(e.target.files[0].file); //doing this before
    //   the setter would have been better placement
    setFile(e.target.files[0]);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    await upload(file);
    navigate("/");
  }

  return (
    <div>
      <form
        id="ImageForm"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          accept="image/*"
          name="image-file"
          id="file"
          onChange={handleChange}
        />
        <button className="btn btn-primary btn-lg">Upload</button>
      </form>
    </div>
  );
}

export default UploadImage;
