import React, { useState } from 'react';

const images = [
  require('../assets/img/olive_banner.jpg'),
  require('../assets/img/olive_banner.jpg'),
  require('../assets/img/olive_banner.jpg'),
];

const CarouselSection = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <section className="carousel-section">
      <h3>I nostri prodotti</h3>
      <div className="carousel">
        <button onClick={prev}>&lt;</button>
        <img src={images[index]} alt={`slide ${index + 1}`} className="carousel-img" />
        <button onClick={next}>&gt;</button>
      </div>
    </section>
  );
};

export default CarouselSection;