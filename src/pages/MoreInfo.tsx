import "../styles/About.css";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import "../styles/Contact.css";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import "../styles/Social.css";
import { ChevronDown } from "lucide-react";
import "../styles/FAQ.css";
import { Link } from "react-router-dom";
import "../styles/tarjet_banc.css";

function MoreInfo() {
  // About Section
  const stats = [
    {
      icon: "10+",
      title: "Años de Experiencia",
      description:
        "Más de una década sirviendo a miles de clientes satisfechos",
    },
    {
      icon: "4k+",
      title: "Productos",
      description: "Amplio catálogo de artículos de papelería y oficina",
    },
    {
      icon: "100%",
      title: "Satisfacción",
      description: "Garantía de calidad en todos nuestros productos",
    },
  ];

  // Contact Section
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  // Social Section
  const socials = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "#1877F2",
      followers: "3.7k",
      Link: "https://www.facebook.com/OfficePlusNuevaRosita?locale=es_LA",
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "#E4405F",
      followers: "1.2k",
      Link: "https://www.instagram.com/officeplusnuevarosita/",
    },
  ];

  // FAQ Section
  const [openId, setOpenId] = useState<number | null>(null);

  const tarjets = [
    {
      type: "banc",
      number_card: "1234 5678 9012 3456",
      name: "OFFICE PLUS",
    },
    {
      type: "banc",
      number_card: "1234 5678 9012 3456",
      name: "OFFICE PLUS",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "¿Cuál es el tiempo de entrega?",
      answer:
        "Los pedidos realizados antes de las 2:00 PM se entregan el mismo día en zonas locales. Para envíos nacionales, el tiempo de entrega es de 2-5 días hábiles.",
    },
    {
      id: 2,
      question: "¿Tienen envío gratis?",
      answer:
        "Sí, ofrecemos envío gratis en todas las compras superiores a $50. Para montos menores, el costo de envío varía según la ubicación.",
    },
    {
      id: 3,
      question: "¿Cómo puedo realizar un pedido?",
      answer:
        "Puedes realizar tu pedido directamente en nuestro sitio web o por WhatsApp en cualquier producto. También puedes contactarnos discretamente por teléfono o email.",
    },
    {
      id: 4,
      question: "¿Tienen tienda física?",
      answer:
        "Sí, contamos con una tienda física ubicada en 123 Calle Principal, Centro Comercial. Estamos abiertos de 8:00 AM a 6:00 PM entre lunes y viernes, y sábados de 9:00 AM a 2:00 PM.",
    },

    {
      id: 5,
      question: "¿El pedido se envía automáticamente por WhatsApp?",
      answer:
        "Sí, al confirmar tu selección, la página genera el mensaje y lo envía por WhatsApp para una atención rápida.",
    },
    {
      id: 6,
      question: "¿Qué formas de pago aceptan?",
      answer:
        "Aceptamos pagos en efectivo, tarjeta de débito o crédito, y transferencias bancarias.",
    },
    {
      id: 7,
      question: "¿Mis datos están seguros?",
      answer:
        "Sí, garantizamos la seguridad de tus datos personales. No compartimos información con terceros sin tu consentimiento explícito.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* About Section */}
      <section className="about">
        <div className="about-container">
          <h2>Acerca de Office Plus</h2>
          <p className="about-subtitle">
            Somos tu mejor aliado para equipar la oficina, escuela o negocio con
            productos de calidad excepcional a precios incomparables.
          </p>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.title}</h3>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-container">
          <h2>Contáctanos</h2>
          <p className="contact-subtitle">
            Estamos aquí para ayudarte. No dudes en comunicarte con nosotros.
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon phone-icon">
                  <Phone size={24} />
                </div>
                <div className="info-text">
                  <h4>Teléfono</h4>
                  <p>+52 (861) 614 6075</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon location-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-text">
                  <h4>Dirección</h4>
                  <p>Boulevard lopez mateo </p>

                  <p>Jalisco 2125 independencia 26830</p>
                  <p>Nueva Rosita, Coah.</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon email-icon">
                  <Mail size={24} />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>officeplus.nuevarosita@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon time-icon">
                  <Clock size={24} />
                </div>
                <div className="info-text">
                  <h4>Horario</h4>
                  <p>Lunes a Sabado: 8:00 AM - 8:00 PM</p>
                  <p>Domingo: cerrado</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Envíanos un Mensaje</h3>

              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="social">
        <div className="social-container">
          <h2>Síguenos en Redes Sociales</h2>
          <p className="social-subtitle">
            Mantente al día con nuestras últimas ofertas, productos y novedades
          </p>

          <div className="social-grid">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.Link}
                  className="social-card"
                  style={
                    { "--accent-color": social.color } as React.CSSProperties
                  }
                >
                  <div className="social-icon">
                    <Icon size={48} />
                  </div>
                  <h3>{social.name}</h3>
                  <p>{social.followers}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="terjetas_credits">
        <h5>Tarjetas de Crédito</h5>
        
        <div className="tarjet-container">
          {tarjets.map((tarjet, index) => (
            <div key={index} className="tarjet-card">
              <h3>{tarjet.name}</h3> <br />
              <p>{tarjet.number_card}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="faq-container">
          <h2>Preguntas Frecuentes</h2>
          <p className="faq-subtitle">
            Encuentra respuestas a las preguntas más comunes
          </p>

          <div className="faq-list">
            {faqs.map((item) => (
              <div key={item.id} className="faq-item">
                <button
                  className={`faq-question ${openId === item.id ? "active" : ""}`}
                  onClick={() => toggleFAQ(item.id)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={20} className="chevron" />
                </button>
                {openId === item.id && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MoreInfo;
