import React from "react";
import Section from "../components/Section.js";
import Header from "../components/Header.js";
import Dropdown from "../components/Dropdown.js";
import image from "../assets/images/background_about.png";
import datas from "../datas/text.json";
import "../styles/accueil.scss";

function Accueil() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Section background={image} src=" image banniere" />
        {datas.map((data) => (
          <Dropdown key={data.id} name={data.title} description={data.texte} />
        ))}
      </div>
    </div>
  );
}

export default Accueil;
