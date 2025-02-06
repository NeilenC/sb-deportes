"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./about.css";

import foto1 from "../../public/resport-clinic-preparacion-fisica.jpg";
import foto2 from "../../public/beneficios_de_jugar_futbol.webp";

const About = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      itemsRef.current.forEach((item) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            item.classList.add("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Captura los elementos visibles al cargar la página

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = [
    {
      image: [foto1, foto2],
      text: [
        "En SB Deportes, nos dedicamos a crear diseños que reflejen la esencia del equipo.",
        "Nuestra misión es ofrecer productos que no solo sobresalgan por su estilo, sino que también brinden comodidad y resistencia, acompañando a cada deportista en sus entrenamientos, competencias y momentos de triunfo.",
      ],
      position: "left",
    },
    {
      image: [foto2, foto2],
      text: [
        "Nos diferencia nuestra atención al detalle y el enfoque personalizado que ponemos en cada proyecto",
        "Trabajamos de la mano con vos para que tus camisetas sean exactamente como las imaginas, asegurándonos de que cada diseño sea una extensión de tu pasión por el deporte.",
        "Ya sea que formes parte de un equipo, un club, o simplemente busques algo único, estamos a disposición para hacer realidad tus ideas con dedicación, calidad y compromiso.",
      ],
      position: "right",
    },
  ];

  return (
    <div className="about-container">
      {content.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            itemsRef.current[index] = el;
          }}
          className={`about-item ${item.position}`}
        >
          {item.position === "left" ? (
            <div className="about-content">
              {item.image.map((imageItem, index) => {
                return (
                  <Image
                    key={index}
                    src={imageItem}
                    alt={`Imagen ${index + 1}`}
                    className="about-image"
                  />
                );
              })}
              <div className="about-text">
                {item.text.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="about-content">
              <div className="about-text">
                {item.text.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              {item.image.map((imageItem, index) => {
                return (
                  <Image
                    key={index}
                    src={imageItem}
                    alt={`Imagen ${index + 1}`}
                    className="about-image"
                  />
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default About;
