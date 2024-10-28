import { Link } from 'react-router-dom';
import { useSelector } from '../../../app/store/store';
import { selectIsAuth } from '../../FeatureUser/slice';
import FavoriteList from '../components/FavoriteList/FavoriteList';
import st from './FavoritePage.module.css';
import { selectFavorites } from '../slice';

const FavoritePage = () => {
  const isAuth = useSelector(selectIsAuth);
  const favorites = useSelector(selectFavorites);

  return (
    <main className={st.main}>
      {isAuth ? (
        <>
          {!favorites.length && (
            <h1 className={st.mainTitle}>
              You haven't liked anything<br/> click on the like to add the game to
              your favorites
            </h1>
          )}
          {favorites.length > 1 && (
            <h1 className={st.mainTitle}>you liked it</h1>
          )}
          <FavoriteList />
        </>
      ) : (
        <div className={st.profileError}>
          <p className={st.message}>
            Please register to access your favorites.
          </p>
          <Link to={'/login'} className={st.link}>
            Login
          </Link>
        </div>
      )}
    </main>
  );
};

export default FavoritePage;
