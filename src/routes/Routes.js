import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import ScrollToTopOnPageChange from './Scroll.js';

import Index from "../pages/pag_inicial.js";
import Aulas from "../pages/aulas.js";
import Servicos from "../pages/servicos.js";
import Torneios from "../pages/torneios.js";

function AppRoutes() {
  return (
    <Router>
      <ScrollToTopOnPageChange/>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/aulas" element={<Aulas />} />
        <Route exact path="/servicos" element={<Servicos />} />
        <Route exact path="/torneios" element={<Torneios />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
