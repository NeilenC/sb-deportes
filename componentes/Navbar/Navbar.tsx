"use client";
import { useEffect, useState } from "react";
import logo from "../../public/logo1.png";
import Image from "next/image";
import "./navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const smoothScrollTo = (target: any) => {
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500; 
    let startTime: any = null;

    const animation = (currentTime: any) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Asegura que el progreso no exceda 1
      const ease = easeInOutQuad(progress); // Cambia el tipo de easing si lo deseas
      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    const easeInOutQuad = (t: any) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    requestAnimationFrame(animation);
  };

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      smoothScrollTo(section);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <Image src={logo} alt="Logo" height={200} width={250} />
        </div>
        <ul className="menu">
          <li>
            <a href="#home" onClick={() => handleScrollTo("home")}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleScrollTo("about")}>
              Quiénes Somos
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => handleScrollTo("services")}>
             Servicios
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={() => handleScrollTo("reviews")}>
             Experiencias
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleScrollTo("contact")}>
              Contácto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
