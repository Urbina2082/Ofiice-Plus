import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <p className="footer-description">Su mejor aliado para equipar la oficina con productos de calidad. Con más de 20 años de experiencia.</p>
            <div className="social-links">
              <a href="#"><Facebook size={24} /></a>
              <a href="#"><Instagram size={24} /></a>
              <a href="#"><MessageCircle size={24} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Atención al Cliente</h3>
            <ul>
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Catálogo</a></li>
              <li><a href="#">Ofertas Especiales</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Mi Cuenta</h3>
            <ul>
              <li><a href="#">Historial de Compras</a></li>
              <li><a href="#">Política de Devolución</a></li>
              <li><a href="#">Envíos y Entregas</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contactanos</h3>
            <ul>
              <li><a href="tel:861614607">📞 +52 861 614 6075</a></li>
              <li><a href="mailto:officeplus.nuevariosita@gmail.com">📧 officeplus.nuevariosita@gmail.com</a></li>
              <li>📍 Zitácuaro 232, Independencia, Chihuahua, Mexico</li>
            </ul>
            <div className="footer-brand">
              <h4>Office Plus</h4>
              <p>Comodidad con gusto<br/>te atendemos 🎯</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Office Plus. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
