import Footer from '../Footer/Footer';
import './contact.css'

const Contact = () => {
return (
  <div className='contact-container-footer'>

    <div className="contact-container">
    <div className="contact-title-container">
      <h2 className="contact-title">
  <div>VESTITE PARA EL ÉXITO</div> 
  <div className='sb-text'>
    CON <span className="highlight-text">SB DEPORTES</span>
  </div>
</h2>

    </div>
      <div className="contact-divider"></div> 
  
    <div className="form-container">
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <textarea placeholder="Contanos tu idea..." required></textarea>
        <button type="submit">¡Hablemos!</button>
      </form>
    </div>
  </div>
  <Footer/>
  
  </div>
)
}

export default Contact;