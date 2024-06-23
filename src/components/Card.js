import cover from "../datas/logements.json";
import "../styles/card.scss";

function Card() {
  return (
    <div className="card-container">
      {cover.map((cover) => (
        <div className="card" key={cover.id}>
          <img src={cover.cover} alt="la cover" />
        </div>
      ))}
    </div>
  );
}

export default Card;
