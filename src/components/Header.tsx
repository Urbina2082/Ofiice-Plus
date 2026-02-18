import { Search, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <a href="tel:861614607" className="top-bar-link">
            <Phone size={16} /> 861 614 6075
          </a>
          <a
            href="mailto:officeplus.nuevariosita@gmail.com"
            className="top-bar-link"
          >
            <MessageCircle size={16} />
            officeplus.nuevarosita@gmail.com
          </a>
        </div>
        <div className="top-bar-right">
          <span>Envío Gratis en compras mayores a $100</span>
        </div>
      </div>

      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/logo.webp" alt="Office Plus" />
            {/* <span>Office<br/>Plus</span> */}
          </Link>

          <div className="search-bar">
            <input type="text" placeholder="Busca productos, marcas y más..." />
            <button className="search-btn">
              <Search size={20} />
            </button>
          </div>

          <nav className="nav-menu">
            <Link to="/escritura" className="nav-item">
              Escritura <span>▼</span>
            </Link>
            <Link to="/papel" className="nav-item">
              Papel <span>▼</span>
            </Link>
            <Link to="/oficina" className="nav-item">
              Oficina <span>▼</span>
            </Link>
            <Link to="/tecnologia" className="nav-item">
              Tecnología <span>▼</span>
            </Link>
            <Link to="/mas-info" className="nav-item mas-info-btn">
              Más Info
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
