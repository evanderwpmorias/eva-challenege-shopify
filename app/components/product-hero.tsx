// a slider compoement for the product hero section with 3 images coming from a metafield called hero with back and forward buttons
import React, { useState, useEffect } from 'react';

const ProductHero = ({ images = [] }: {images: any}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider relative h-96">
      <button className="slider-button" onClick={goToPrevious}>
        &lt;
      </button>
      {images.map((image:any, index:number) => (
        <div
          key={index}
          className={`slide absolute top-0  w-full h-full ${index === currentIndex ? 'active' : ' opacity-0'}`}
          style={{
            backgroundImage: `url(${image.node.image.url})`,
          }}
        ></div>
      ))}
      <button className="slider-button" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default ProductHero;
