"use client";

import React, { useState } from "react";
import "./reviews.css";

const reviewsData = [
  {
    id: 1,
    teamName: "Team A",
    image: "/equipo2.jpg",
    comment:
      "Excelente calidad de camiseta, me encanta el diseño y la comodidad.",
    rating: 5,
  },
  {
    id: 2,
    teamName: "Team B",
    image: "/equipo.jpg",
    comment:
      "El servicio fue muy rápido, y la camiseta tiene un acabado impecable.",
    rating: 4,
  },
  {
    id: 3,
    teamName: "Team C",
    image: "/rancagua.jpg",
    comment: "La camiseta está genial.",
    rating: 3,
  },
  {
    id: 1,
    teamName: "Team A",
    image: "/equipo2.jpg",
    comment:
      "Excelente calidad de camiseta, me encanta el diseño y la comodidad.",
    rating: 5,
  },
  {
    id: 2,
    teamName: "Team B",
    image: "/equipo.jpg",
    comment:
      "El servicio fue muy rápido, y la camiseta tiene un acabado impecable.",
    rating: 4,
  },
  {
    id: 1,
    teamName: "Team A",
    image: "/equipo2.jpg",
    comment:
      "Excelente calidad de camiseta, me encanta el diseño y la comodidad.",
    rating: 5,
  },
  {
    id: 2,
    teamName: "Team B",
    image: "/equipo.jpg",
    comment:
      "El servicio fue muy rápido, y la camiseta tiene un acabado impecable.",
    rating: 4,
  },
];

const Reviews = () => {
  const [reviews] = useState([...reviewsData, ...reviewsData]);

  return (
    <section className="reviews-section">

      <div className="intro-text">
        <p className="since-text">Desde 2013</p>
        <hr className="reviews-divider" />
      <h2 className="title">
        Algunos testimonios <br />
        de nuestros clientes
      </h2>
      </div>

      <div className="reviews-carousel">
        <div className="reviews-wrapper">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <img
                src={review.image}
                alt={`Camiseta de ${review.teamName}`}
                className="review-image"
              />
              <div className="review-text">
                <h3 className="team-name">{review.teamName}</h3>
                <p className="review-comment">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;