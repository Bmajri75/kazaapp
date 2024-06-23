import "../styles/section.scss";
import image from "../assets/images/background.png";

function Section() {
  return (
    <div className="section">
      <img className="background-image" src={image} alt="fond sur banniere" />
      <div className="text-overlay">Chez vous, partout et ailleurs</div>
    </div>
  );
}

export default Section;
