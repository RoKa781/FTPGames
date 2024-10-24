import { Link } from "react-router-dom";
import { IGame } from "../../../../shared/types/types";
import st from "./GameArticle.module.css";

interface GameArticleProps {
  game: IGame;
}

const GameArticle: React.FC<GameArticleProps> = ({ game }) => {
  const { id, title, release_date, publisher, thumbnail, genre, short_description } = game;

  return (
    <li className={st.gameItem}>
      <article className={st.gameArticle}>
        <img src={thumbnail} alt={title} className={st.gameImage} />
        <div className={st.infoContainer}>
          <h2 className={st.title}>{title}</h2>
          <p><strong>Publisher:</strong> {publisher}</p>
          <p><strong>Release:</strong> {release_date}</p>
          <p><strong>Genre:</strong> {genre}</p>
          <p>{short_description}</p>
          <Link to={`/game/${id}`} className={st.playButton}>
            More Info
          </Link>
        </div>
      </article>
    </li>
  );
};

export default GameArticle;
