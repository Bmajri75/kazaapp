import logo from "../assets/images/logo_header.svg";
import "../styles/header.scss";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/about">À propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
