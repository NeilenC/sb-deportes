import About from "@/componentes/About/About";
import Contact from "@/componentes/Contact/Contact";
import HomePage from "@/componentes/Home/HomePage";
import Navbar from "@/componentes/Navbar/Navbar";
import Services from "@/componentes/Services/Services";
import Reviews from "@/componentes/Reviews/Reviews";

export default function Home() {
 
  return (
    <div>
      <Navbar/>
      <section id="home"> <HomePage/> </section>
      <section id="about">  <About/></section>
      <section id="services">  <Services/></section>
      <section id="reviews">  <Reviews/></section>
      <section id="contact"> <Contact/></section>
    </div>
  )

}
