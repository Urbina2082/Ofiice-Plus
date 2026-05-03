import "./cotiza.css"
import {  Phone } from "lucide-react";

type CotizacionProps = {
  icon: string;
  pregunta: string;
  llama: string;
  iconButton: string;
  textButton: string;
};

const Cotiza = ({
  icon,
  pregunta,
  llama,
  iconButton,
  textButton,
}: CotizacionProps) => {
  return (
    <div className="cotizacion">
      <img className="Icono-cotizacion" src={icon} alt="" />
      <div className="cotizacion-mesaje">
        <span>{pregunta}</span>
        <h5>{llama}</h5>
      </div>

      <a href="#">
        <button>
          <img src={iconButton} alt="" />
          {textButton}
        </button>
      </a>
    </div>
  );
};

export default Cotiza;
