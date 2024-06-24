import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import image from "../assets/images/404.png";
import "../styles/404.scss";

function Notfound() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <h1>
          <img src={image} alt=" 404" />
        </h1>
        <p className="alternatif-texte">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to={"/"}>
          <p>Retourner sur la page d’accueil</p>
        </Link>
      </div>
    </div>
  );
}

export default Notfound;
