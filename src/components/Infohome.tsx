import "../styles/infohome.css"

const InfoHome = () => {
  return (
<section className="condiciones">
  <h2>Condiciones de Compra</h2>
  
  <p className="sub">Información importante sobre envíos y costos</p>

  <div className="cards">

   
    <div className="card">
      <div className="icon">🚚</div>
      <h3>Envío Gratis</h3>
      <div className="line"></div>
      <p>Compras entre $100 y $1000</p>
      <div className="pill">📍 Dentro de 100 km</div>
    </div>

  
    <div className="card">
      <div className="icon">📍</div>
      <h3>Costo por Distancia</h3>
      <div className="line"></div>
      <p>Más de 100 km</p>
      <div className="pill">💲 Se aplica cargo extra</div>
    </div>

   
    <div className="card">
      <div className="icon">💵</div>
      <h3>Pedido Menor</h3>
      <div className="line"></div>
      <p>Compras menores a $100</p>
      <div className="pill">⚠️ Incluye comisión de envío</div>
    </div>

  </div>
</section>
  )
}

export default InfoHome