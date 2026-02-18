import {  MessageCircle } from "lucide-react";
import "../styles/FeaturedProducts.css";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Set de bolígrafos Premium",
    price: 29.99,
    image: "/product-1.jpg",
  },
  {
    id: 2,
    name: "Cuaderno Profesional A4",
    price: 24.99,
    image: "/product-2.jpg",
  },
  {
    id: 3,
    name: "Organizador de Escritorio",
    price: 34.99,
    image: "/product-3.jpg",
  },
  {
    id: 4,
    name: "Calculadora Científica",
    price: 29.99,
    image: "/product-4.jpg",
  },
  { id: 5, name: "Pack 500 Hojas A4", price: 18.99, image: "/product-5.jpg" },
  {
    id: 6,
    name: "Engrapadora Heavy Duty",
    price: 90.99,
    image: "/product-6.jpg",
  },
  {
    id: 7,
    name: "Set Marcadores Colores",
    price: 56.99,
    image: "/product-7.jpg",
  },
  { id: 8, name: "Archivador Premium", price: 78.99, image: "/product-8.jpg" },
  { id: 5, name: "Pack 500 Hojas A4", price: 18.99, image: "/product-5.jpg" },
  {
    id: 6,
    name: "Engrapadora Heavy Duty",
    price: 90.99,
    image: "/product-6.jpg",
  },
  {
    id: 7,
    name: "Set Marcadores Colores",
    price: 56.99,
    image: "/product-7.jpg",
  },
  { id: 8, name: "Archivador Premium", price: 78.99, image: "/product-8.jpg" },
];

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="section-header">
        <h2>Productos Destacados</h2>
        <p>Descubre nuestros productos más populares</p>
        <a href="#" className="view-all">
          Ver todo
        </a>
      </div>

      <div className="products-grid">
        {products.map((product) => (
           <Link to={`/details/`} className="product-card" >
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
          </div></Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
