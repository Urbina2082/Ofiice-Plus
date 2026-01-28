import '../styles/Brands.css'

const brands = [
  { name: 'HP', image: '/brand-parker.jpg' },
  { name: 'BROTHER', image: '/brand-moleskine.jpg' },
  { name: 'SAMSUNG', image: '/brand-staedtler.jpg' },
  { name: 'EPSON', image: '/brand-casio.jpg' },
  { name: 'CANON', image: '/brand-bic.jpg' },
  { name: 'BIG', image: '/brand-pilot.jpg' },
  { name: 'AZOR', image: '/brand-sharpie.jpg' },
  { name: 'MAPED', image: '/brand-postit.jpg' },
  { name: 'NEWELL', image: '/brand-postit.jpg' },
  { name: 'SHARPIE', image: '/brand-postit.jpg' },
  { name: 'PRI H.', image: '/brand-postit.jpg' },
  { name: 'BACO', image: '/brand-postit.jpg' },
  { name: 'VINCI', image: '/brand-postit.jpg' },
  { name: 'ACCQRARAS PILTS', image: '/brand-postit.jpg' },
  { name: 'ESCALET', image: '/brand-postit.jpg' },
  { name: 'BARRILITO', image: '/brand-postit.jpg' },
  { name: 'ACCO', image: '/brand-postit.jpg' },
  { name: 'GBC', image: '/brand-postit.jpg' },
  { name: 'PASCUA', image: '/brand-postit.jpg' },
  { name: 'PRITA FOW', image: '/brand-postit.jpg' },
  { name: 'NAVITEK', image: '/brand-postit.jpg' },
  { name: 'OFIK', image: '/brand-postit.jpg' },
]

function Brands() {
  return (
    <section className="brands">
      <div className="brands-header">
        <span className="badge">Marcas de confianza</span>
        <h2>Marcas que Distribuimos</h2>
        <p>Trabajamos con las mejores marcas del mercado para garantizar los productos de la más alta calidad para tu oficina</p>
      </div>

      <div className="brands-grid">
        {brands.map(brand => (
          <div key={brand.name} className="brand-card">
            <img src={brand.image} alt={brand.name} />
            <h3>{brand.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brands
