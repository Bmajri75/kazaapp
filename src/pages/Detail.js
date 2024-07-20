import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import pictures from "../datas/logements.json";
import "../styles/detail.scss";

function Details() {
  let { id } = useParams();

  // Filtrer les données pour obtenir les images correspondant à l'ID
  const logement = pictures.find((item) => item.id === id);

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        {logement ? (
          <div className="carousel-container">
            <Carousel key={logement.id} images={logement.pictures} />
          </div>
        ) : (
          <p>Aucun logement trouvé pour l'ID {id}</p>
        )}
        <h1>Détails H1</h1>
        <p>Voici les détails du logement numéro {id}.</p>
      </div>
    </div>
  );
}

export default Details;
