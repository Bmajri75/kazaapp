import Section from "./Section.js";
import Galery from "./Galery.js";
import image from "../assets/images/background.png";
import "../styles/body.scss";

function Body() {
  return (
    <div className="container">
      <Section background={image} text="Chez vous, partout et ailleurs" />
      <Galery />
    </div>
  );
}

export default Body;
