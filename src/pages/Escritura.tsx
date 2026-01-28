import { MessageCircle } from 'lucide-react'
import '../styles/FeaturedProducts.css'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

const escrituraProducts: Product[] = [
  { id: 1, name: 'Bolígrafo Premium Azul', price: 2.99, image: '/product-1.jpg' },
  { id: 2, name: 'Bolígrafo Rojo Profesional', price: 3.49, image: '/product-2.jpg' },
  { id: 3, name: 'Juego de Lápices HB', price: 5.99, image: '/product-3.jpg' },
  { id: 4, name: 'Marcadores Permanentes', price: 7.99, image: '/product-4.jpg' },
  { id: 5, name: 'Lapicero Gel Premium', price: 4.49, image: '/product-5.jpg' },
  { id: 6, name: 'Set de Plumones Color', price: 12.99, image: '/product-6.jpg' },
  { id: 7, name: 'Corrector Líquido', price: 1.99, image: '/product-7.jpg' },
  { id: 8, name: 'Bolígrafos Metálicos', price: 8.99, image: '/product-8.jpg' },
]

function Escritura() {
  return (
    <section className="featured-products">
      <div className="section-header">
        <h2>Escritura</h2>
        <p>Descubre nuestros productos de escritura más populares</p>
        <a href="/" className="view-all">← Volver</a>
      </div>

      <div className="products-grid">
        {escrituraProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <button className="btn-whatsapp">
                <MessageCircle size={18} /> Consulta por WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Escritura
