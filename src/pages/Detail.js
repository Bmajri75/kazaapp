import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  let { id } = useParams();

  return (
    <div>
      <h1>Détails du logement</h1>
      <p>Voici les détails du logement numéro {id}.</p>
    </div>
  );
}

export default Details;
