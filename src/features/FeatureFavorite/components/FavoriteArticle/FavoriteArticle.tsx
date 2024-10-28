import { Link } from 'react-router-dom';
import st from './FavoriteArticle.module.css';
import { FavoriteArticleProps } from '../../utils/types';
import LikeButton from '../../../../shared/components/LikeButton/LikeButton';

const FavoriteArticle: React.FC<FavoriteArticleProps> = ({ favorite }) => {
  const {
    id,
    thumbnail,
    title,
    short_description,
    genre,
    release_date,
    status,
    publisher,
  } = favorite;

  return (
    <li className={st.gameItem}>
      <article className={st.article}>
        <Link to={`/game/${id}`} className={st.link}>
          <img src={thumbnail} alt={title} className={st.thumbnail} />
        </Link>
        <div className={st.infoContainer}>
          <h3 className={st.title}>{title}</h3>
          <p className={st.description}>{short_description}</p>
          <p>{genre}</p>
          <p>{status}</p>
          <p>{publisher}</p>
          <p>{release_date}</p>
          <LikeButton id={String(id)} />
        </div>
      </article>
    </li>
  );
};

export default FavoriteArticle;

