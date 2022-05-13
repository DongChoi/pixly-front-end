import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

import PhotoList from "./PhotoList";
import EditImage from "./EditImage";
import ImageKeyContext from "./ImageContext";

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

  // async function testdownload() {
  //   const resp = await axios.get("http://localhost:5001/test");
  //   const blob = await resp.data.blob();
  //   console.log(resp);
  //   const url = URL.createObjectURL(blob);
  //   return url;
  // }

  // const url = testdownload();

  function targetImage(imageKey) {
    localStorage.setItem("imageKey", imageKey);
    setImageKey(localStorage.get("imageKey"));
  }

  return (
    <div className="App bgimage">
      <ImageKeyContext.Provider value={{ imageKey }}>
        {/* HERE IT ISSS HAHA
      <img src={url} alt="" /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PhotoList images={allImages} />} />
            <Route
              path="/images/:key"
              element={<EditImage getImageById={getImageById} />}
            />
          </Routes>
        </BrowserRouter>
      </ImageKeyContext.Provider>
    </div>
  );
}

export default App;
