/* eslint-disable react/prop-types */
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {
      isLoading && (<h2 className={isLoading}> Loading... </h2>)
      }

      {/* images.map */}

      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} title={img.title} url={img.url} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
