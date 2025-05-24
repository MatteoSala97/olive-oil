import React from 'react';
import heroImg from '../assets/img/olive_banner.jpg';

const Hero = () => (
  <section className="hero">
    <img src={heroImg} alt="Hero" className="hero-img" />
    <div className="hero-text">
      <h2>Benvenuto in Gocce di Sole</h2>
      <p>L’olio extravergine che illumina la tua tavola.</p>
      <button className="hero-btn">Scopri di più</button>
    </div>
  </section>
);

export default Hero;