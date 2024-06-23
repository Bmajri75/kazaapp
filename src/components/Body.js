import Section from "./Section.js";
import Galery from "./Galery.js";
import "../styles/body.scss";

function Body() {
  return (
    <div className="container">
      <Section />
      <Galery />
    </div>
  );
}

export default Body;
