import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo_header.svg";
import "../styles/header.scss";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
