import '../styles/Brands.css'

const brands = [
  { name: 'HP', image: '/Brands-Icons/hp.webp' },
  { name: 'BROTHER', image: '/Brands-Icons/brother-logo.svg' },
  { name: 'SAMSUNG', image: '/Brands-Icons/samsung.webp' },
  { name: 'EPSON', image: '/Brands-Icons/epson.webp' },
  { name: 'CANON', image: '/Brands-Icons/canon.webp' },
  { name: 'BIG', image: '/Brands-Icons/bic.webp' },
  { name: 'AZOR', image: '/Brands-Icons/azor.webp' },
  { name: 'MAPED', image: '/Brands-Icons/maped.webp' },
  { name: 'SHARPIE', image: '/Brands-Icons/sharpie.webp' },
  { name: 'ESSELTE', image: '/Brands-Icons/esselte.webp' },
  { name: 'PELIKAN', image: '/Brands-Icons/pelikan.webp' },
  { name: 'ACCO', image: '/Brands-Icons/acco.webp' },
  { name: 'GBC', image: '/Brands-Icons/gbc.webp' },
  { name: 'PASCUA', image: '/Brands-Icons/pascua.webp' },
  { name: 'PRINTA FORM', image: '/Brands-Icons/printaform.webp' },
  { name: 'NAVITEK', image: '/Brands-Icons/navitek.webp' },

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
