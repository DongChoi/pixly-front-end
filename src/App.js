import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

import PhotoList from "./PhotoList";
import EditImage from "./EditImage";

function App() {
  const [allImages, setAllImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotoList images={allImages} />} />
          <Route
            path="/images/:key"
            element={<EditImage image={allImages} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
