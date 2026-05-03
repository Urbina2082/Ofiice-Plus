import "../styles/datails.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import FlagSpinner from "react-spinners/GridLoader";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  product_images: { image_url: string }[];
};

function Details() {
  // Obtiene el id desde la URL
  const { id } = useParams();

  // Estado para guardar un solo producto
  const [product, setProduct] = useState<Product | null>(null);

  const getProduct = async () => {
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        id,
        name,
        description,
        price,
        product_images (
          image_url
        )
      `,
      )
      .eq("id", id)
      .single();

    if (error) {
      console.log(error);
    } else {
      setProduct(data);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  //sube la pantalla del scroll al inicio cada vez que se carga un nuevo producto
  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct();
  }, []);

  // Mientras carga
  if (!product) {
    return (
      <section
        className="ol"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FlagSpinner size={30} color="#0052CC" />
      </section>
    );
  }

  return (
    <div className="contents">
      <div className="principalDetails">
        <div className="imagen_urls">
          <img
            src={product.product_images?.[0]?.image_url}
            alt={product.name}
          />
        </div>

        <div className="description_products">
          <h3>{product.name}</h3>

          <p className="price_detals">${product.price}.00</p>

          <p className="stock-status">✓ Disponible en stock</p>

          <div className="description">
            <img src="" alt="" />
            <div className="info">
              <b>Description:</b>
              <br />
              {product.description}
            </div>
          </div>

          <div className="checks-deta">
        
              <div className=" tats-description-details">
                <img
                  className="icons-details stats "
                  src="/veri.webp"
                  alt=""
                />
             Calidad <br /> Garantizada
              </div>
              <div className=" tats-description-details">
                <img
                  className="icons-details stats"
                  src="/Icons/caja-negra.webp"
                  alt=""
                />
              Envío <br /> Rápido
              </div>
              <div className=" tats-description-details">
                <img
                  className="icons-details stats"
                  src="/insignia-de-la-cinta.webp"
                  alt=""
                />
               Garantía <br /> Total
              </div>
            
          </div>
          <button
            className="btn-whatsapp"
            onClick={(e) => {
              e.stopPropagation();

              const message = `Hola, buen día.

Me gustaría solicitar más información sobre el siguiente producto:

Producto: ${product.name}
Precio: $${product.price}

Quedo atento(a) a su respuesta. Muchas gracias.`;

              const whatsappUrl = `https://wa.me/528611268148?text=${encodeURIComponent(message)}`;

              window.open(whatsappUrl, "_blank");
            }}
          >
            <img className="iconswhatsapp" src="/Icons/whatsapp.webp" alt="" />
            Consulta por WhatsApp
          </button>
        </div>
      </div>

      <div className="atributos">
       
       <div className="chesks">
        <img className="checks-img" src="/veri.webp" alt="" />
        Compra Segura
       </div>
       <div className="line-deta"></div>
       <div className="chesks">
        <img className="checks-img" src="/veri.webp" alt="" /> Sin Devoluciones
       </div> <div className="line-deta"></div>
       <div className="chesks">
        <img className="checks-img" src="/veri.webp" alt="" /> Atencion Personalizada
       </div>
      </div>
    </div>
  );
}

export default Details;
