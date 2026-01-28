import { MessageCircle } from 'lucide-react'
import '../styles/FeaturedProducts.css'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

const tecnologiaProducts: Product[] = [
  { id: 1, name: 'Calculadora Científica', price: 29.99, image: '/product-1.jpg' },
  { id: 2, name: 'Calculadora Gráfica', price: 89.99, image: '/product-2.jpg' },
  { id: 3, name: 'Mouse Inalámbrico', price: 19.99, image: '/product-3.jpg' },
  { id: 4, name: 'Teclado Mecánico', price: 59.99, image: '/product-4.jpg' },
  { id: 5, name: 'Monitor LED 24"', price: 199.99, image: '/product-5.jpg' },
  { id: 6, name: 'Webcam Full HD', price: 44.99, image: '/product-6.jpg' },
  { id: 7, name: 'Hub USB 7 Puertos', price: 34.99, image: '/product-7.jpg' },
  { id: 8, name: 'Lámpara USB LED', price: 22.99, image: '/product-8.jpg' },
]

function Tecnologia() {
  return (
    <section className="featured-products">
      <div className="section-header">
        <h2>Tecnología</h2>
        <p>Descubre nuestros productos de tecnología más populares</p>
        <a href="/" className="view-all">← Volver</a>
      </div>

      <div className="products-grid">
        {tecnologiaProducts.map(product => (
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

export default Tecnologia
