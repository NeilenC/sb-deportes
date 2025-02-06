"use client"

import { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import logo from "../../public/logo1.png";
import Image from "next/image";
import "./navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [menuOpen]);


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

  const smoothScrollTo = (target) => {
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    requestAnimationFrame(animation);
  };

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      smoothScrollTo(section);
      setMenuOpen(false); // Cierra el menú al seleccionar una opción
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <Image src={logo} alt="Logo" height={200} width={250} />
        </div>

        
        <TiThMenu 
        
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        
        />
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={() => handleScrollTo("home")}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleScrollTo("about")}>
              ¿Quiénes Somos?
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
