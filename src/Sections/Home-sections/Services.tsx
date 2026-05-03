import { CardsHome } from "../../components/services/CardsHome";
import ExtrasPoint from "../../components/services/ExtrasPoint";
import Equipamiento from "../../components/services/Equipamiento";
import Cotizacion from "../../components/services/Cotiza";

import "./Services.css";

const CardsHomeparams = [
  {
    img: "./lona.avif",
    icon: "./lona-icon.avif",
    title: "Impresión de Lonas",
    description:
      "Publicidad exterior resistente para promociones, eventos y negocios.",
  },
  {
    img: "vinilPerforado.avif",
    icon: "perforado-icon.avif",
    title: "Vinil Microperforado",
    description:
      "Ideal para ventanas. Visibilidad interior y publicidad exterior.",
  },
  {
    img: "plotter.avif",
    icon: "plottericon.avif",
    title: "Impresión en Plotter",
    description:
      "Alta calidad en múltiples materiales para todo tipo de proyectos.",
  },
];

const materials = [
  { label: "Lona" },
  { label: "Vinil" },
  { label: "Microperforado" },
  { label: "Coroplast" },
  { label: "Imán" },
  { label: "Planos" },
  { label: "Cartulina" },
];

const services = [
  { label: "Impresiones digitales" },
  { label: "Recorte de vinil" },
  { label: "Diseño gráfico" },
  { label: "Publicidad personalizada" },
];

const EquipamientoItems = [
  { id: 1, name: "Sillas para oficina", image: "./sillaParaOficina.avif" },
  { id: 2, name: "Escritorios", image: "./escritorio.avif" },
  { id: 3, name: "Archiveros", image: "./archi.avif"},
  { id: 4, name: "Lockers", image: "lockers.avif" },
  { id: 5, name: "Cestos de basura", image: "./cestoDeBasura.avif" },
];

const Services = () => {
  return (
    <div className="Servicios">
      <h2>
        Impresiones en <br /> <span>Gran Formato</span>
      </h2>

      <p>Ofrecemos servicios de impresión en gran formato...</p>

      <div className="rendercards">
        {CardsHomeparams.map((params) => (
          <CardsHome {...params} />
        ))}
      </div>

      <div className="extras-point">
        <ExtrasPoint
          title="Materiales disponibles"
          icon="materiales.avif"
          items={materials}
          variant="chips"
        />

        <ExtrasPoint
          title="Servicios adicionales"
          icon="estrella.avif"
          items={services}
          variant="list"
        />
      </div>

      <Equipamiento icon="silla.avif" Items={EquipamientoItems} />

      <Cotizacion
        icon="llamar.avif"
        pregunta="Nesesitas una Cotizacion?"
        llama="Llamanos ahora!"
        iconButton="llamar.avif"
        textButton="861-614-2776"
      />

      <span className="description">📍 Jalisco 2125, Independecia,26830 Nueva Rosita, Coahuila</span>
    </div>
  );
};

export default Services;
