import "./Contacto.css";
import img from "../assets/fultonlogonegro.png";
import {
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export default function Contacs() {
  return (
    <section className="Contacto">
      <h2 className="Contacto__title">¡Conéctate con nosotros!</h2>
      <div className="Contacto__redes">
        <a
          href="https://www.facebook.com/tuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.tiktok.com/@tuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className="tiktok"
        >
          <FaTiktok />
        </a>
        <a
          href="https://wa.me/573001112233"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/tuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@tuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className="youtube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
          target="_blank"
          rel="noopener noreferrer"
          className="gmail"
        >
          <FaEnvelope />
        </a>
      </div>
      
      <img className="Contacto__image" src={img} alt="Logo Fulton Systems" />

    </section>
  );
}

/*
function Contacts() {
  return (
    <div>
      Contacts
      <h2>¿Listo para Comenzar?</h2>
      <p>Contáctanos para una consultoría gratuita</p>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Tu mensaje"></textarea>
        <button type="submit">Enviar Mensaje</button>
        // En la sección de botones, reemplaza con:
        <div className="button-container">
          <button
            onClick={() => window.open("https://wa.me/573135435807", "_blank")}
          >
            📞 Contactar Ahora
          </button>
          <button>🚀 Ver Portafolio</button>
        </div>
      </form>
    </div>
  );
}
export default Contacts;*/
