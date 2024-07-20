import React, { useState } from "react";
import vector from "../assets/images/vector.svg";
import PropTypes from "prop-types";
import "../styles/dropdown.scss";

function Dropdown({ name, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div
        className={`dropdown-close ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <p>{name}</p>
        <img className="arrow" src={vector} alt="arrow" />
      </div>
      <div className="dropdown-content">
        <p>{description}</p>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Dropdown;
