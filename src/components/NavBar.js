import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/style.css';

function NavBar() {
  const location = useLocation();

  return (
    <nav>
      <Link id="index" to="/"className={`item ${location.pathname === '/' ? 'active' : ''}`}>    
        tennis club figueira da foz
      </Link>
      <span className="container">
        <Link to="/aulas" className={`item ${location.pathname === '/aulas' ? 'active' : ''}`}>
          aulas
        </Link>
        <Link to="/servicos" className={`item ${location.pathname === '/servicos' ? 'active' : ''}`}>
          serviços
        </Link>
        <Link to="/torneios" className={`item ${location.pathname === '/torneios' ? 'active' : ''}`}>
          torneios
        </Link>
      </span>
    </nav>
  );
}

export default NavBar;
