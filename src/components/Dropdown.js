import React, { useState } from "react";
import vector from "../assets/images/vector.svg";
import "../styles/dropdown.scss";

function Dropdown({ name, description }) {
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
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
