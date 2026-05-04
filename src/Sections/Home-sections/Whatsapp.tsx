import "./whatsapp.css";

const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <div className="what-info">
        <div className="what-info-archivos">
          <div className="what-info-icon">
            <img src="Icons-Whatsapp/subir-archivo.avif" alt="" />
          </div>
          <div className="what-info-text">
            <h1>
              ENVÍA TUS <br />
              <span>ARCHIVOS</span> <br />
              PARA <span className="impresion">IMPRESIÓN</span>
            </h1>
            <p>
              Manda tus diseños, proyectos o archivos listos para imprimir por{" "}
              <strong>WhatsApp</strong> y nosotros nos encargamos del resto.
            </p>
          </div>
        </div>
        <div className="what-info-format">
          <div className="alert">
            ⚠️ Este número es únicamente para envío de archivos.
            <br />
            <span>No se atienden llamadas ni mensajes.</span>
          </div>

          <div className="formats-icons">
            <div className="icons-format-format">
              <img src="Icons-Whatsapp/pdf-icon.avif" alt="" />
              <img src="Icons-Whatsapp/png-icon.avif" alt="" />
              <img src="Icons-Whatsapp/psd-icon.avif" alt="" />
            </div>

            <div className="formats">
              <p>Formatos aceptados:</p>
              <div className="tags">
                <span>PDF</span>
                <span>AI</span>
                <span>PSD</span>
                <span>CDR</span>
                <span>JPG</span>
                <span>PNG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="what-contact">
        <div className="whatsapp-card">
          <div className="what-icon">
            <img src="Icons-Whatsapp/whatsapp-color.avif" alt="" />
          </div>

          <h3>MANDA TUS ARCHIVOS POR WHATSAPP AQUÍ</h3>
          <a
            href="https://wa.me/528611088034"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <img src="Icons-Whatsapp/whatsapp-color.avif" alt="" /> 861 614 2776
          </a>
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
