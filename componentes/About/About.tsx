"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./about.css";

import foto1 from "../../public/resport-clinic-preparacion-fisica.jpg";
import foto2 from "../../public/beneficios_de_jugar_futbol.webp";

const About = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      image: foto1,
      text: [
        "En SB Deportes, somos un equipo de apasionados por el deporte y el diseño, dedicados a crear camisetas deportivas personalizadas que reflejan la esencia de cada atleta.",
        "Nuestra misión es ofrecer productos que no solo sobresalgan por su estilo, sino que también brinden comodidad y resistencia, acompañando a cada deportista en sus entrenamientos, competencias y momentos de triunfo.",
      ],
      position: "left",
    },
    {
      image: foto2,
      text: [
        "Nos diferencia nuestra atención al detalle y un enfoque personalizado que ponemos en cada proyecto, entendiendo que cada cliente tiene necesidades únicas.",
        "En SB Deportes, trabajamos de la mano contigo para que tus camisetas sean exactamente como las imaginas, asegurándonos de que cada diseño sea una extensión de tu pasión por el deporte.",
        "Ya sea que formes parte de un equipo, un club, o simplemente busques algo único, estamos aquí para hacer realidad tus ideas con dedicación, calidad y compromiso.",
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
    <Image
      src={item.image}
      alt={`Imagen ${index + 1}`}
      className="about-image"
    />
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
    <Image
      src={item.image}
      width={400}
      height={400}
      alt={`Imagen ${index + 1}`}
      className="about-image"
    />
  </div>
)}

        </div>
      ))}
    </div>
  );
};

export default About;
