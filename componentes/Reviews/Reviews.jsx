'use client' 

import React, { useState } from 'react';
import './reviews.css';

const reviewsData = [
    {
        id: 1,
        teamName: 'Team A',
        image: '/equipo2.jpg',
        comment: 'Excelente calidad de camiseta, me encanta el diseño y la comodidad.',
        rating: 5,
    },
    {
        id: 2,
        teamName: 'Team B',
        image: '/equipo.jpg',
        comment: 'El servicio fue muy rápido, y la camiseta tiene un acabado impecable.',
        rating: 4,
    },
    {
        id: 3,
        teamName: 'Team C',
        image: '/rancagua.jpg',
        comment: 'La camiseta está genial.',
        rating: 3,
    },
];

const Reviews = () => {
    const [reviews, setReviews] = useState(reviewsData);

    // Función para agregar una review ficticia temporalmente
    const addFakeReview = () => {
        const fakeReview = {
            id: new Date().getTime(), // ID único basado en la hora
            teamName: 'Team Ficticio',
            image: 'https://via.placeholder.com/150',
            comment: '¡Increíble calidad y atención! Totalmente recomendado.',
            rating: 5,
        };

        setReviews([fakeReview, ...reviews]); // Agregar la review ficticia al principio
    };

    return (
        <section className="reviews-section">
            {/* <h2 className="reviews-title">Lo que dicen nuestros clientes</h2> */}
            {/* <button onClick={addFakeReview} className="add-review-button">
                Agregar Review Ficticia
            </button> */}
            <div className="reviews-container">
                {reviews.map((review) => (
                    <div className="review-card" key={review.id}>
                        <img
                            src={review.image}
                            alt={`Camiseta de ${review.teamName}`}
                            className="review-image"
                        />
                        <h3 className="team-name">{review.teamName}</h3>
                        <div className="review-rating">
                            {Array.from({ length: review.rating }, (_, index) => (
                                <span key={index} className="star">★</span>
                            ))}
                            {Array.from({ length: 5 - review.rating }, (_, index) => (
                                <span key={index} className="star empty">★</span>
                            ))}
                        </div>
                        <p className="review-comment">{review.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
