import { Link } from 'react-router-dom';
import st from './FavoriteArticle.module.css';
import { FavoriteArticleProps } from '../../utils/types';

const FavoriteArticle: React.FC<FavoriteArticleProps> = ({favorite}) => {
  const { id, thumbnail, title, short_description } = favorite

  return (
    <li className={st.gameItem}>
    <Link to={`/game/${id}`} className={st.link}>
      <article className={st.article}>
        <img src={thumbnail} alt={title} className={st.thumbnail} />
        <h3 className={st.title}>{title}</h3>
        <p className={st.description}>{short_description}</p>
      </article>
    </Link>
  </li>
  )
}

export default FavoriteArticle