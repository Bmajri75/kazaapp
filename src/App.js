import React from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Detail from "./pages/Detail.js";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/details/:id" element={<Detail />} />
            <Route path="/" element={<Accueil />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
