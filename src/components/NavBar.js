import React from 'react';
import { Link } from "react-router-dom";
import '../css/style.css';

function NavBar(){

    return(
     
    <nav>
      <Link id="index" to="/">
        <p className="item active"> tennis club figueira da foz</p>
      </Link>
      <span className="container">
        <a href="/aulas" className="item">aulas</a>
        <a href="/servicos" className="item">serviços</a>
        <a href="/torneios" className="item">torneios</a>
      </span>
    </nav>

    )
}

export default NavBar;