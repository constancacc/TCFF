import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import ScrollToTopOnPageChange from './Scroll.js';
import PageTransition from './PageTransition.js';

import Index from "../pages/pag_inicial.js";
import Aulas from "../pages/aulas.js";
import Servicos from "../pages/servicos.js";
import Torneios from "../pages/torneios.js";

function AppRoutes() {
  return (
    <Router>
      <ScrollToTopOnPageChange/>
      <Routes>
        <Route exact path="/" element={<PageTransition key="index"><Index /></PageTransition>} />
        <Route exact path="/aulas" element={<PageTransition key="aulas"><Aulas /></PageTransition>} />
        <Route exact path="/servicos" element={<PageTransition key="servicos"><Servicos /></PageTransition>} />
        <Route exact path="/torneios" element={<PageTransition key="torneios"><Torneios /></PageTransition>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
