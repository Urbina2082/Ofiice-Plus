import { MessageCircle } from 'lucide-react'
import '../styles/FeaturedProducts.css'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

const oficinaProducts: Product[] = [
  { id: 1, name: 'Escritorio Ejecutivo', price: 189.99, image: '/product-1.jpg' },
  { id: 2, name: 'Silla Ergonómica', price: 149.99, image: '/product-2.jpg' },
  { id: 3, name: 'Organizador de Escritorio', price: 34.99, image: '/product-3.jpg' },
  { id: 4, name: 'Archivador 4 Gavetas', price: 78.99, image: '/product-4.jpg' },
  { id: 5, name: 'Lámpara LED Escritorio', price: 42.99, image: '/product-5.jpg' },
  { id: 6, name: 'Engrapadora Heavy Duty', price: 90.99, image: '/product-6.jpg' },
  { id: 7, name: 'Sacabocados Profesional', price: 25.99, image: '/product-7.jpg' },
  { id: 8, name: 'Cajonera Móvil', price: 64.99, image: '/product-8.jpg' },
]

function Oficina() {
  return (
    <section className="featured-products">
      <div className="section-header">
        <h2>Oficina</h2>
        <p>Descubre nuestros productos de oficina más populares</p>
        <a href="/" className="view-all">← Volver</a>
      </div>

      <div className="products-grid">
        {oficinaProducts.map(product => (
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

export default Oficina
