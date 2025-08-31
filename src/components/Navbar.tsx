import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/flogoblanco.png";

function Navbar() {
  const whatsappNumber = "573182327489"; // Reemplaza con tu número
  const whatsappMessage = "Hola, me interesa sus servicios"; // Mensaje predeterminado
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <nav className="navbar">
      {/* Logo y nombre con enlace a WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="brand-container"
      >
       
        <div className="brand-name">Fulton Systems</div>
      </a>
      {/* Logo y nombre con enlace a WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="logo-container"
      >
        <img className="logo" src={logo} alt="Logo Fulton Systems" />
       
      </a>

      {/* Menú de navegación */}
      <div className="nav-menu">
        <Link to="/" className="nav-link">
          Inicio
        </Link>
        <Link to="/about" className="nav-link">
          Acerca de
        </Link>
        <Link to="/contacts" className="nav-link">
          Contacto
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
