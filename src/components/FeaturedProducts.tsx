/**
 * 🚀 COMPONENTE OPTIMIZADO DE PRODUCTOS
 *
 * ✅ Buenas prácticas aplicadas:
 * - Lazy loading de imágenes (mejora rendimiento inicial)
 * - decoding="async" (no bloquea render)
 * - fallback de imagen (evita errores visuales)
 * - control de eventos dentro de Link (UX correcta)
 * - evitar DOM innecesario (menos carga para el navegador)
 *
 * 🧠 Filosofía:
 * Mostrar solo lo necesario, cargar solo lo visible y evitar trabajo extra al navegador.
 */

import "../styles/FeaturedProducts.css";
import { Link } from "react-router-dom";
import { InitialProduct } from "../components/InitialProduct";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Product = {
  id: number;
  name: string;
  price: number;
  product_images: {
    image_url: string;
  }[];
};

function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  /**
   * 📦 Fetch optimizado
   * - Solo traemos lo necesario
   * - Limitamos resultados para evitar sobrecarga
   */
  const getProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select(`
        id,
        name,
        price,
        product_images (
          image_url
        )
      `)
      .limit(15);

    if (error) {
      console.error("Error fetching products:", error);
    } else {
      setProducts(data || []);
    }
  };

  /**
   * 🔁 Se ejecuta UNA sola vez
   * Evita múltiples renders innecesarios
   */
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="featured-products" id="ProductsHome">
      <div className="section-header">
        <InitialProduct
          title="Productos Destacados"
          description="Descubre nuestros productos más populares"
        />
      </div>

      <div className="products-grid">
        {products.map((product) => {
          /**
           * 🖼️ Fallback de imagen
           * Evita errores si el producto no tiene imagen
           */
          const image =
            product.product_images?.[0]?.image_url ||
            "/Images/placeholder.webp";

          return (
            <Link
              key={product.id}
              to={`/details/${product.id}`}
              className="product-card"
            >
              <div className="product-image">
                <img
                  src={image}
                  alt={product.name}
                  loading="lazy"       // 🚀 SOLO carga cuando aparece en pantalla
                  decoding="async"    // 🚀 No bloquea render
                />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>

                <button
                  className="btn-whatsapp"
                  onClick={(e) => {
                    /**
                     * 🔘 Control de eventos
                     * Evita conflicto entre botón y navegación del Link
                     */
                    e.preventDefault();
                    e.stopPropagation();

                    const message = `Hola, me interesa este producto:
Producto: ${product.name}
Precio: $${product.price}`;

                    const whatsappUrl = `https://wa.me/528611268148?text=${encodeURIComponent(
                      message
                    )}`;

                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  <img
                    className="iconswhatsapp"
                    src="/Icons/whatsapp.webp"
                    alt="WhatsApp"
                    loading="lazy"
                    decoding="async"
                  />
                  Consulta por WhatsApp
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedProducts;