import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/style.css';

function NavBar() {
  const location = useLocation();

  return (
    <nav className='hidden'>
      <Link id="index" to="/"className={`item ${location.pathname === '/' ? 'active' : ''}`}>    
        Tennis Club da Figueira da Foz
      </Link>
      <span className="container">
        <Link to="/aulas" className={`item ${location.pathname === '/aulas' ? 'active' : ''}`}>
          Aulas
        </Link>
        <Link to="/servicos" className={`item ${location.pathname === '/servicos' ? 'active' : ''}`}>
          Serviços
        </Link>
        <Link to="/torneios" className={`item ${location.pathname === '/torneios' ? 'active' : ''}`}>
          Torneios
        </Link>
      </span>
    </nav>
  );
}

export default NavBar;
