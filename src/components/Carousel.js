// src/Carousel.js
import React, { useState } from "react";
import "../styles/carousel.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button prev">
        {"<"}
      </button>
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={goToNext} className="carousel-button next">
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
