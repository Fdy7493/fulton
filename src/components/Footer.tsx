import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
function Footer() {
    return (
        <>  <footer className="footer"><p> © 2025 Servicio Tecnico FLTN</p>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com/share/1B72jUUVXY/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://wa.me/+573182327489" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-pink-500 text-2xl hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://www.tiktok.com/@dudas.y.aportes?_t=ZS-8zMhKRj3nYw&_r=1">
                        <FaTiktok className="text-pink-500 text-2xl hover:scale-110 transition-transform" />
                </a>
                <p>Animate mira nuestras redes¡</p>
                <p>© 2025 fultonibarguenm@gmail.com All rights reserved.</p>
                </div>
            </footer>
        </>
  
    );
}
export default Footer;
