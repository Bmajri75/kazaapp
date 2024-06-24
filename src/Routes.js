import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function AppRoutes() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      {/* si je veux le faire disparaitre enlever le fixe dans le scss */}
    </Router>
  );
}

export default AppRoutes;
