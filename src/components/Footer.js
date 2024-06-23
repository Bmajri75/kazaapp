import logo from "../assets/images/footer_logo.svg";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
