import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../img/index/logo.png';

import '../css/style.css';
import '../css/Menumobile.css';

function NavBar() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const isMenuPage = location.pathname === "/menu"; // Verifica se está na página do menu

  // Função que verifica a largura do ecrã e atualiza o estado
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      {isMobile ? (
        <div className="mobile-nav">
          {/* Ícone do menu hambúrguer (muda se estiver na página do menu) */}
          <Link id="hamburguer" to={isMenuPage ? "/" : "/menu"}>
            <svg className="menu_hamburger" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H25" stroke="white" strokeWidth="1" strokeLinecap="round"/>
              
              {!isMenuPage && ( // Se NÃO estiver no menu, mostra as outras barras
                <>
                  <path d="M1 11H25" stroke="white" strokeWidth="1" strokeLinecap="round" />
                  <path d="M1 21H25" stroke="white" strokeWidth="1" strokeLinecap="round" />
                </>
              )}
            </svg>
          </Link>

          {/* Link para a homepage (logo ao centro) */}
          <Link to="/" id="logo-mobile">
            <img src={logo} alt="Logo" id="logo_mobile" style={{ height: "40px" }} />
          </Link>
        </div>
      ) : (
        // Navbar Desktop
        <>
          <Link id="index" to="/" className={`item ${location.pathname === '/' ? 'active' : ''}`}>
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
        </>
      )}
    </nav>
  );
}

export default NavBar;
