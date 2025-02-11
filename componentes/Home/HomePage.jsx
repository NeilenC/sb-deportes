// src/pages/HomePage.js
import Carousel from '../Carousel/Carousel';
import './homepage.css'; // Asegúrate de crear este archivo para los estilos

const HomePage = () => {
  return (
    <div className="home-container">
      <Carousel />
    </div>
  );
};

export default HomePage;
