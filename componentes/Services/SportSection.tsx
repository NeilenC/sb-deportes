import React, { useState } from 'react';
import './sport-section.css'
const SportsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const openModal = (image:any) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="sports-section">
      <div className="sport-images-grid">
        <img
          src="image1.jpg"
          alt="Sport 1"
          className="sport-image"
          onClick={() => openModal('image1.jpg')}
        />
        <img
          src="image2.jpg"
          alt="Sport 2"
          className="sport-image"
          onClick={() => openModal('image2.jpg')}
        />
        {/* Agrega más imágenes aquí */}
      </div>

      {/* Modal para la imagen */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Detailed view" className="modal-image" />
            <button className="close-modal" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SportsSection;
