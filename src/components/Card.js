import { Link } from "react-router-dom";
import cover from "../datas/logements.json";
import "../styles/card.scss";

function Card() {
  return (
    <div className="card-container">
      {cover.map((item) => (
        <div className="card" key={item.id}>
          <Link to={`/details/${item.id}`}>
            <img src={item.cover} alt="la cover" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Card;
