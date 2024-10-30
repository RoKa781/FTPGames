import { Helmet } from "react-helmet-async";
import { useSelector } from "../../../app/store/store";
import Error from "../../../shared/components/Error/Error";
import GamesList from "../components/GamesList/GamesList";
import SideBar from "../components/SideBar/SideBar";
import { selectError } from "../slice";
import st from './GamesPage.module.css'

const GamesPage = () => {
  const error = useSelector(selectError);

  return (
    <main className={st.main}>
      <Helmet>
        <title>FTPGames - Find Game</title>
      </Helmet>
      <section className={st.gamesSection}>
        {error ? <Error error={error} /> : <GamesList />}
        <SideBar />
      </section>
    </main>
  );
};

export default GamesPage;
