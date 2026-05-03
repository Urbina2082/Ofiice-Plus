import "../styles/HeroBanner.css";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <div className="vidrio">
          <h3 className="liquid">Office Plus</h3>
        </div>
        <div className="hero-badge">
          🔥 Gran Apertura - Hasta 20% de Descuento
        </div>
        <h1 className="hero-title">
          Todo lo que necesitas
          <br />
          para tu <span className="highlight">oficina</span>
        </h1>
        <p className="hero-description">
          Productos de calidad, precios incomparables <br /> y envío rápido. 
          <b>Office Plus</b> es tu mejor aliado <br /> para equipar tu espacio
          de trabajo.
        </p>
        <div className="hero-buttons">
          <a href="#ProductsHOme">
            <button className="btn btn-primary">
             <img className="icons-baner-white" src="/Icons/carrito-de-compras.webp" alt="" /> Comprar ahora 
            </button>
          </a>
          <button className="btn btn-secondary">
              <img className="icons-baner-white" src="/Icons/cajas.webp" alt="" />Explorar Catálogo</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
         <img className="icons-baner-white status-icons" src="/Icons/caja-negra.webp" alt="" /> <b>3,000+</b> Productos
          </div>
          <div className="stat">
            <img className="icons-baner-white status-icons" src="/Icons/camion.webp" alt="" /><b>Envío</b>  Rápido
          </div>
          <div className="stat">
            <img className="icons-baner-white status-icons" src="/Icons/escudo.webp" alt="" /> <b>Garantía</b> Total
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero-image.jpg" alt="Office supplies" />
        <div className="discount-badge">
          15%
          <br />
          Descuento
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
