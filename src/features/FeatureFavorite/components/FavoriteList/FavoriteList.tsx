import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../../../app/store/store';
import FavoriteArticle from '../FavoriteArticle/FavoriteArticle';
import st from './FavoriteList.module.css';
import { fetchFavoritesGamesThunk, selectFavorites } from '../../slice';


const FavoriteList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites)

  useEffect(() => {
    dispatch(fetchFavoritesGamesThunk())
  }, [dispatch])

  return (
    <ul className={st.favoriteList}>
      {favorites.map((fav) => (
        <FavoriteArticle key={fav.id} favorite={fav} />
      ))}
    </ul>
  );
};

export default FavoriteList;
