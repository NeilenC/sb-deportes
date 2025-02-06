"use client";
import React, { useState, useEffect, useRef } from "react";
import "./sport-section.css";



const sports = [
  {
    name: "FUTBOL",
    images: ["/equipo.jpg", "/equipo2.jpg", "/rancagua.jpg", "/equipo2.jpg"],
  },
  {
    name: "VOLEY",
    images: ["/volley1.jpg", "/volley2.jpg"],
  },
  {
    name: "PADEL",
    images: ["/padel1.jpg", "/padel2.jpg"],
  },
  {
    name: "HOCKEY",
    images: ["/equipo2.jpg", "/equipo2.jpg", "/equipo2.jpg"],
  },
];

const SportsSection= () => {
  const [selectedSportIndex, setSelectedSportIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSport, setSelectedSport] = useState(sports[0]);

  const sportImageContainerRef = useRef(null);

  const handleSportClick = (index, sport) => {
    setSelectedSport(sport);
    setSelectedSportIndex(index);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Scroll infinito
  useEffect(() => {
    const container = sportImageContainerRef.current;
    if (container) {
      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = container;

        // Cuando el contenedor llega al final, agregamos más imágenes
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          const currentImages = selectedSport.images;
          const newImages = [...currentImages]; // Repetimos las imágenes al final
          const newSport = { ...selectedSport, images: [...currentImages, ...newImages] };
          setSelectedSport(newSport); // Actualizamos el array de imágenes
        }
      };

      container.addEventListener("scroll", handleScroll);

      return () => {
        if (container) {
          container.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, [selectedSport]);

  return (
    <div className="sports-section">
      <section className="sports-section">
        <ul className="sports-list">
          {sports.map((sport, index) => (
            <li
              key={index}
              className={`sport-item ${
                selectedSportIndex === index ? "selected" : ""
              }`}
              onClick={() => handleSportClick(index, sport)}
              role="button"
            >
              {sport.name}
            </li>
          ))}
        </ul>

        {selectedSport && (
          <div className="sport-image-container" ref={sportImageContainerRef}>
            <div className="sport-images-grid">
              {selectedSport.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedSport.name} ${index + 1}`}
                  className="sport-image"
                  onClick={() => openModal(image)}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Modal para la imagen */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Detailed view"
                className="modal-image"
              />
            )}
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SportsSection;
