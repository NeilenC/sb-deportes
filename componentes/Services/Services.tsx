"use client";

import React, { useState } from "react";
import { FaPaintBrush, FaPrint } from "react-icons/fa";
import { GiSewingMachine } from "react-icons/gi";
import { IoPrintSharp } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import "./services.css";

function Services() {
  const services = [
    {
      icon: <MdDesignServices />,
      title: "Diseño creativo",
      description:
        "Cada camiseta comienza con un diseño pensado para expresar tu estilo y espíritu deportivo.",
    },
    {
      icon: <IoPrintSharp />,
      title: "Impresión y sublimación",
      description:
        "Usamos tecnología de vanguardia para lograr colores vibrantes y detalles impecables.",
    },
    {
      icon: <GiSewingMachine />,
      title: "Costura de calidad",
      description:
        "Nos aseguramos de que cada prenda sea duradera, con acabados de alta precisión.",
    },
  ];

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

  const [selectedSport, setSelectedSport] = useState<any>(sports[0]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSportIndex, setSelectedSportIndex] = useState<any>(0);

  const handleSportClick = (index: number, sport: any) => {
    setSelectedSport(sport);
    setSelectedSportIndex(index);
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="contact-container">
    

      {/* Sección de Deportes */}
      <h2 className="sports-title">¿ en que nos especializamos ?</h2>
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

      <section className="services-section">
        <h2 className="services-title">¿ Cómo lo hacemos ?</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Enlarged" className="modal-image" />
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
