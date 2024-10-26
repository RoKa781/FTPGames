import FavoriteList from '../components/FavoriteList/FavoriteList';
import st from './FavoritePage.module.css';

const FavoritePage = () => {
  return (
    <main className={st.main}>
        <h1 className={st.mainTitle}>you liked it</h1>
        <FavoriteList />
    </main>
  )
}

export default FavoritePage