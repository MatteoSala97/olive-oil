import React from 'react';

const quadImages = [
  require('../assets/img/olive_banner.jpg'),
  require('../assets/img/olive_banner.jpg'),
  require('../assets/img/olive_banner.jpg'),
];

const quadTitles = [
  'Olio Classico',
  'Olio Bio',
  'Olio Aromatizzato',
];

const QuadSection = () => (
  <section className="quad-section">
    {quadImages.map((img, i) => (
      <div className="quad" key={i}>
        <img src={img} alt={quadTitles[i]} className="quad-img" />
        <h4>{quadTitles[i]}</h4>
      </div>
    ))}
  </section>
);

export default QuadSection;