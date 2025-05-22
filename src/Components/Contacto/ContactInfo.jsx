import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Valores del Proyecto</h2>
      <ul>
        <li>Educación</li>
        <li>Responsabilidad</li>
        <li>Creatividad</li>
        <li>Trabajo en equipo</li>
      </ul>
      <h2>Nosotros</h2>
      <p>Somos una parte de el grado 5to de informática</p>
      <p> de el centro educativo Madre Laura.</p>

      <h2>Contacto</h2>
      <p>Email: <a href="mailto:Elysianwine@gmail.com">Elysianwine@gmail.com</a></p>
      <p>Instagram: <a href="https://instagram.com/Elysian.wine" target="_blank" rel="noopener noreferrer">@Elysian.wine</a></p>
      <p>Whatsapp: <a href="https://wa.me/8493182371" target="_blank" rel="noopener noreferrer">849-318-2371</a></p>    
    </div>
  );
};

export default ContactInfo;