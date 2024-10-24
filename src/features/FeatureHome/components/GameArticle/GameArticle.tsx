import { IGame } from "../../../../shared/types/types";
import st from "./GameArticle.module.css";

interface GameArticleProps {
  game: IGame;
}

const GameArticle: React.FC<GameArticleProps> = ({ game }) => {
  const { id, title, release_date, publisher, thumbnail, genre } = game;

  return (
    <li className={st.gameItem}>
      <article className={st.gameArticle}>
        <img src={thumbnail} alt={title} className={st.gameImage} />
        <div className={st.infoContainer}>
          <h2 className={st.title}>{title}</h2>
          <p><strong>Publisher:</strong> {publisher}</p>
          <p><strong>Release:</strong> {release_date}</p>
          <p><strong>Genre:</strong> {genre}</p>
          <a
            href={`https://freetogame.com/game/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={st.playButton}
          >
            Play
          </a>
        </div>
      </article>
    </li>
  );
};

export default GameArticle;
