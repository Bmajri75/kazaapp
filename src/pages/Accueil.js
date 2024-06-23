import React from "react";
import Body from "../components/Body.js";
import Header from "../components/Header.js";
import "../styles/accueil.scss";

function Accueil() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Body />
      </div>
    </div>
  );
}

export default Accueil;
