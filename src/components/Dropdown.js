import React, { useState } from "react";
import vector from "../assets/images/vector.svg";
import "../styles/dropdown.scss";

function Dropdown({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div className="dropdown-close" onClick={toggleDropdown}>
        <p>{name}</p>
        <img className="arrow" src={vector} alt="arrow" />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. <br />
            Tout comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
