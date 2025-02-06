"use client";

import React, { useState } from "react";
import { GiSewingMachine } from "react-icons/gi";
import { IoPrintSharp } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import "./services.css";
import SportsSection from "./SportSection";

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

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="services-section-container">
      <h2 className="services-first-title">¿ En qué nos especializamos ?</h2>

      <SportsSection />

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
