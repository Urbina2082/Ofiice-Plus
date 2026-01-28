import { ArrowRight } from 'lucide-react'
import '../styles/HeroBanner.css'

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <div className="hero-badge">
          🎉 Gran Apertura - Hasta 20% de Descuento
        </div>
        <h1 className="hero-title">
          Todo lo que necesitas<br />
          para tu <span className="highlight">oficina</span>
        </h1>
        <p className="hero-description">
          Productos de calidad, precios incomparables y envío rápido. OffcePus<br />
          es tu mejor aliado para equipar tu espacio de trabajo.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">
            Comprar ahora <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary">
            Explorar Catálogo
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span>📦</span> 3,000+<br/> Productos
          </div>
          <div className="stat">
            <span>🚚</span> Envío<br/> Rápido
          </div>
          <div className="stat">
            <span>✅</span> Garantía
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero-image.jpg" alt="Office supplies" />
        <div className="discount-badge">15%<br/>Descuento</div>
      </div>
    </section>
  )
}

export default HeroBanner
