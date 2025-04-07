import React, { useState, useEffect } from "react";
import "../styles/hero.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import img3 from "../assets/hero3.jpg";
const images = [img1, img2, img3];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <FaArrowLeft className="arrow left" onClick={prevSlide} />
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
      <FaArrowRight className="arrow right" onClick={nextSlide} />
    </section>
  );
};
export default Hero;
