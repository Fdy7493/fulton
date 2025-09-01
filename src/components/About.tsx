import "./About.css";
// Importar imágenes con nombres más descriptivos
import creativityImg from "../assets/celulares.jpg";
import qualityImg from "../assets/videojuegos.jpeg";
import passionImg from "../assets/computo.jpeg";

// Mover datos constantes fuera del componente
const SERVICES = [
  {
    icon: "🧑📱",
    title: "Reparacion de Celulares",
    description:
      "Reparamos todo tipo o marca de celulares.",
  },
  {
    icon: "🎮",
    title: "Consolas de video Juegos",
    description: "Reparacion y Mantenimiento de Consolas de Videojuegos",
  },
  {
    icon: "🖥️",
    title: "Mantenimiento Equipos de Computo",
    description: "Actualizaciones, mejoras, soporte y gestión de contenido.",
  },
];

const VALUES = [
  {
    image: creativityImg,
    alt: "Creatividad",
    description:
      "Si necesitas cambiar la Pantalla Rota de tu celular puedes contar con nosotros utilizamos repuestos de, calidad y confiabilidad, lo que garantiza la calidad y confiabilidad de los materiales, además contamos con un servicio técnico especializado, con técnicos profesionales y experimentados que te ofrecen las garantías necesarias para que tu móvil quede en perfectas condiciones."
  },
  {
    image: qualityImg,
    alt: "Calidad",
    description:
      "Si tienes tu consola averiada y no sabes cómo repararla, estás de enhorabuena, porque nosotros reparamos cualquier consola PS5, PS4, PS3, PSP, PS VITA, Wii, Wii U, Nintendo Switch, 3DS, 2DS, 3DSXL 2DSXL, Xbox 360, Xbox Series S, Xbox Series X o cualquier otra videoconsola del mercado por mucho menos de lo que te imaginas."
  },
  {
    image: passionImg,
    alt: "Hecho con amor",
    description:
      "Nuestros servicios suelen incluir diagnóstico, limpieza interna, optimización del sistema operativo, eliminación de virus y actualización de drivers, con opciones de formateo e instalación del sistema.Diagnostico de las fallas más comunes de inmediato. Recogemos, repararamos y devolvemos tu computador a tu casa o lugar de trabajo con nuestro rápido servicio a domicilio.",
  },
];

export default function About() {
  return (
    <section className="about">
      <article className="about__intro">
        <h2 className="about__title">Acerca de Nosotros</h2>
        <div className="about__content">
          <h3>
            Somos un grupo de emprendedores enfocados en el
            mantenimiento de equipos informaticos  y equipos electronicos como celulares ,tablets ,
            consolas de videojuegos.
            
          </h3>
          <ul>
            <li>✅ Reparacion y mantenimiento de Dispositivos moviles celulares</li>
            <li>✅ Reparacion y mantenimiento de Consolas de video juegos</li>
            <li>✅ Reparacion y mantenimiento de Computadores</li>
          </ul>
          <p>
            💬 Escríbenos para que revisemos tu equipo.
            <br />
            <a href="https://api.whatsapp.com/send/?phone=573182327489&text&type=phone_number&app_absent=0">
              📲 3182327489
            </a>
            <br />
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
              📧 :fultonibarguenm@gmail.com
            </a>
          </p>
        </div>

        <div className="about__values">
          {VALUES.map((value, index) => (
            <div key={index} className="value-card">
              <img
                src={value.image}
                alt={value.alt}
                loading="lazy"
                className="value-image"
              />
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </article>

      <section className="services">
        <h2 className="services__title">¿Qué puedo hacer por ti?</h2>
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <article key={index} className="service-card">
              <h3 className="service-card__title">
                <span className="service-icon">{service.icon}</span>
                {service.title}
              </h3>
              <p className="service-card__description">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}


