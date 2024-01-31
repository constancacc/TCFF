import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "../pages/pag_inicial.js";

import Aulas from "../pages/aulas.js";
import Servicos from "../pages/servicos.js";
import Torneios from "../pages/torneios.js";

function AppRoutes() {
  return (
    <Router>
      <Routes>
       <Route exact path="/" element={<Index />}></Route>
       <Route exact path="/aulas" element={<Aulas />}></Route>
       <Route exact path="/servicos" element={<Servicos />}></Route>
       <Route exact path="/torneios" element={<Torneios />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
