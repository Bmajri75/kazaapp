// src/Carousel.js
import React, { useState, useEffect } from "react";
import "../styles/carousel.scss";

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

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
