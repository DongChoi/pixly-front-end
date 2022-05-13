import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

import PhotoList from "./PhotoList";
import EditImage from "./EditImage";
import ImageKeyContext from "./ImageContext";
import UploadImage from "./UploadImage";
import NavBar from "./Navbar";

function App() {
  const [allImages, setAllImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageKey, setImageKey] = useState("");
  function getImageById(key) {
    const [image] = allImages.filter((image) => image.imageKey === key);
    console.log("getById: ", allImages);
    return image;
  }

  useEffect(() => {
    async function fetchAllImages() {
      const resp = await axios.get("http://localhost:5001/");
      setAllImages(resp.data);
    }
    fetchAllImages();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  function targetImage(imageKey) {
    localStorage.setItem("imageKey", imageKey);
    setImageKey(localStorage.get("imageKey"));
  }

  async function upload(file) {
    const formData = new FormData();
    formData.append("file", file);
    const image = {
      method: "POST",
      url: "http://localhost:5001/images/add",
      headers: {
        //issue
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };
    const resp = await axios.request(image);
    console.log(resp);
    setAllImages((images) => [...images, resp.data]);
  }

  return (
    <div>
      <ImageKeyContext.Provider value={{ imageKey }}>
        {/* HERE IT ISSS HAHA
      <img src={url} alt="" /> */}
        <BrowserRouter>
          <NavBar />
          <div className="Pixly">
            <Routes>
              <Route path="/upload" element={<UploadImage upload={upload} />} />
              <Route path="/" element={<PhotoList images={allImages} />} />
              <Route
                path="/images/:key"
                element={<EditImage getImageById={getImageById} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </ImageKeyContext.Provider>
    </div>
  );
}

export default App;
