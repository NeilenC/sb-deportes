'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image'; 
import rancagua from '../../public/rancagua.jpg';
import equipo from '../../public/equipo.jpg';
import equipo2 from '../../public/equipo2.jpg';
import { IoIosArrowForward , IoIosArrowBack   } from 'react-icons/io'; // Importamos las flechas
import './carousel.css';

const Carousel = () => {
  const images = [rancagua, equipo, equipo2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Manejo de teclas flecha izquierda/derecha para cambiar de imagen
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goPrevious}>
        <IoIosArrowBack size={15} /> 
      </button>
      
      <Image
        src={images[currentIndex]} 
        alt="Imagen del Carousel"
        className="carousel-image"
        width={800} 
        height={630} 
        objectFit="cover"
      />
      
      <button className="carousel-button next" onClick={goNext}>
        <IoIosArrowForward size={15} /> {/* Icono de flecha derecha */}
      </button>
      
      {/* Puntos de navegación (Dots) */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span 
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`} 
            onClick={() => goToSlide(index)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
