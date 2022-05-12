import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Photo from "./Photo";

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

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {allImages.map((image) => (
        <Photo image={image} />
      ))}
    </div>
  );
}

export default App;
