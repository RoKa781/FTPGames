import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from '../../../../app/store/store';
import { getFavoriteFromStorage, selectFavoritesId, selectIsAuth, selectUser } from '../../slice';
import st from './ProfilePage.module.css';
import { useEffect } from 'react';

const ProfilePage = () => {
  const user = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuth);
  const favorites = useSelector(selectFavoritesId)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavoriteFromStorage())
  }, [dispatch])

  return (
    <main className={st.profile}>
      {isAuth ? (
        <>
          <h1 className={st.userTitle}>Username: {user}</h1>
          <p>Favorite Games: {favorites.length}</p>
        </>
      ) : (
        <div className={st.profileError}>
          <p className={st.message}>Please register to access your profile.</p>
          <Link to={'/login'} className={st.link}>
            Login
          </Link>
        </div>
      )}
    </main>
  );
};

export default ProfilePage;
