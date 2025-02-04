/* eslint-disable react/prop-types */
import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      {/* images.map */}

          <ol>
          {images.map((img) => (
            <li key={img.id}> 
            {img.title}
            </li>
          ))}
          </ol>
          
    </>
  );
};

export default GifGrid;
