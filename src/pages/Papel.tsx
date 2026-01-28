import { MessageCircle } from 'lucide-react'
import '../styles/FeaturedProducts.css'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

const papelProducts: Product[] = [
  { id: 1, name: 'Resma A4 500 Hojas', price: 5.99, image: '/product-1.jpg' },
  { id: 2, name: 'Papel Bond Premium A4', price: 8.99, image: '/product-2.jpg' },
  { id: 3, name: 'Papel Cartulina Blanca', price: 12.99, image: '/product-3.jpg' },
  { id: 4, name: 'Papel Construcción Color', price: 6.99, image: '/product-4.jpg' },
  { id: 5, name: 'Papel Tissue Premium', price: 4.49, image: '/product-5.jpg' },
  { id: 6, name: 'Papel Kraft Rollo', price: 15.99, image: '/product-6.jpg' },
  { id: 7, name: 'Papel Lustre Brillante', price: 9.99, image: '/product-7.jpg' },
  { id: 8, name: 'Papel Satinado A4', price: 14.99, image: '/product-8.jpg' },
]

function Papel() {
  return (
    <section className="featured-products">
      <div className="section-header">
        <h2>Papel</h2>
        <p>Descubre nuestros productos de papel más populares</p>
        <a href="/" className="view-all">← Volver</a>
      </div>

      <div className="products-grid">
        {papelProducts.map(product => (
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

export default Papel
