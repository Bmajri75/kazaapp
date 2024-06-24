import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import "../styles/detail.scss";

function Details() {
  let { id } = useParams();

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <h1>Détails H1</h1>
        <p>Voici les détails du logement numéro {id}.</p>
      </div>
    </div>
  );
}

export default Details;
