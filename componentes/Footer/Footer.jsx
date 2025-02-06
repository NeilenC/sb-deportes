import Image from "next/image";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import tiendanube from "../../public/Logo_de_Tiendanube.svg.png";

function Footer() {
  return (
    <div className="footer">
  <div className="footer-icons">
  <a href="https://sbdeportesarg.mitiendanube.com/" target="_blank" rel="noopener noreferrer">

        <Image alt="tiendanube" src={tiendanube} width={120} height={20} />
        </a>

        <div className="divider"></div> 
        <a href="https://www.instagram.com/sb.camisetasdeportes/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/SBDEPORTES.ARGENTINA?locale=es_LA" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://wa.me/2213095344" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
      <div className="footer-small-text">© 2025 SB Deportes.</div>
    </div>
  );
}

export default Footer;
