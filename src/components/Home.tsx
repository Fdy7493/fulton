import "./Home.css";
import Rmoviles from "../assets/Rmoviles.jpeg";
import Rconsolas from "../assets/Rconsolas.jpeg";
import Rpcs from "../assets/Rpcs.jpeg";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Fulton Systems Soluciones de Software </h1>
        <h3>
          Reparacion de software y hardware en computadores y dispositivos
          moviles ¡
        </h3>
        <div className="button-container">
          <a
            href="https://wa.me/57573182327489?text=Hola,%20quiero%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Contactar Ahora</button>
          </a>

          <a
            href="https://sites.google.com/view/serviciotecnicofltn/home"
            target="_blank"
            rel="nooner noreferrer"
          >
            <button>Ver Portafolio</button>
          </a>

         
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h3>¿Por Qué Elegirnos?</h3>
        <h3>
          Con más de 5 años de experiencia, somos expertos en crear experiencias
          digitales que conectan con tu audiencia y generan resultados tangibles
          para tu negocio.
        </h3>
        <ul>
          <li>✅ Servicio de Asistencia Técnica Informática </li>
          <li>✅ Asistencia Remota</li>
          <li>✅ Soporte técnico 24/7</li>
          <li>✅ Horario de asistencia a domicilio disponible</li>
        </ul>
      </section>

      {/* Services */}
      <section>
        <h2>Nuestros Servicios ¡</h2>
        <div className="service-card">
          <img src={Rmoviles} alt="Reparación de dispositivos móviles" className="service-image" />          
          <h3>📱 Reparacion de Dispositivos moviles</h3>
          <p>
            Somos un equipo totalmente dedicado a reparar cualquier avería que
            pueda sufrir tu iPhone, iPad o iPod en 45 minutos (siempre que haya
            stock del componente a sustituir).
          </p>
        </div>
        <div className="service-card">
          <img src={Rconsolas} alt="Reparacion de Consolas de Videojuegos" className="service-image" /> 
          <h3>🎮 Reparacion de Consolas</h3>
          <p>
            Si tienes cualquier avería en tu consola y no sabes como
            solucionarlo, en TodoManzana te lo hacemos fácil, reparamos tu
            consola para que puedas volver a disfrutar con ella
           
          </p>
        </div>
        <div className="service-card">
          <img src={Rpcs} alt="Reparación de Equipos de Computo" className="service-image" />          
          <h3>🖥️ Reparacion de equipos de computo</h3>
          <p>
            Contamos con 3 tipos de asistencias: (A domicilio, en taller o
            remoto) para cubrir todas tus necesidades. Ofrecemos un servicio
            rápido y garantizado al mejor precio.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2>Proyectos Destacados</h2>
        <div className="project">
          <h3>E-commerce Moda</h3>
          <p>Tienda online con +30% de conversión</p>
        </div>
        <div className="project">
          <h3>App Delivery</h3>
          <p>Aplicación móvil con 10k descargas</p>
        </div>
      </section>

      {/* Testimonial */}
      <section>
        <h2>Lo Que Dicen Nuestros Clientes</h2>
        <blockquote>
          "Increíble trabajo! Nuestro tráfico web aumentó un 200% en solo 3
          meses"
          <cite>- María González, CEO de FashionStore</cite>
        </blockquote>
      </section>
    </div>
  );
}

export default Home;
