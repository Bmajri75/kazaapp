import "../styles/section.scss";

function Section({ background, text }) {
  return (
    <div className="section">
      <img
        className="background-image"
        src={background}
        alt="fond sur banniere"
      />
      <div className="text-overlay">{text}</div>
    </div>
  );
}

export default Section;
