import { Link } from 'react-router-dom';
import { GamesListArticleProps } from '../../utils/types';
import st from './GameArticle.module.css';

const GameArticle: React.FC<GamesListArticleProps> = ({ game }) => {
  const { thumbnail, title, short_description, id } = game;

  return (
    <li className={st.gameItem}>
      <Link to={`/game/${id}`} className={st.link}>
        <article className={st.article}>
          <div 
            className={st.background} 
            style={{ backgroundImage: `url(${thumbnail})` }} 
          />
          <div className={st.infoContainer}>
            <h3 className={st.title}>{title}</h3>
            <p className={st.description}>{short_description}</p>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default GameArticle;
