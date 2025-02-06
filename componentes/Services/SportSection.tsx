"use client";

import React, { useState } from 'react';
import './sport-section.css'

const sports = [
  {
    name: "Fútbol",
    images: ["/equipo.jpg", "/equipo2.jpg","/rancagua.jpg", "/equipo2.jpg", ],
  },
  {
    name: "Vóley",
    images: ["/volley1.jpg", "/volley2.jpg"],
  },
  {
    name: "Pádel",
    images: ["/padel1.jpg", "/padel2.jpg"],
  },
  {
    name: "Hockey",
    images: ["/equipo2.jpg", "/equipo2.jpg", "/equipo2.jpg"],
  },
];



const SportsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedSport, setSelectedSport] = useState<any>(sports[0]);
  const [selectedSportIndex, setSelectedSportIndex] = useState<any>(0);

  const handleSportClick = (index: number, sport: any) => {
    setSelectedSport(sport);
    setSelectedSportIndex(index);
  };

  

  const openModal = (image:any) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
      <div className='sport-section-container'>
      <h2 className="sports-title">¿ En qué nos especializamos ?</h2>
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
          <div className="sport-image-container">
            {/* <h3 className="sport-image-title">{selectedSport.name}</h3> */}
            <div className="sport-images-grid">
              {selectedSport.images.map((image: any, index: any) => (
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
      </div>
  );
};

export default SportsSection;
