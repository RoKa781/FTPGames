import { useSelector } from "../../../app/store/store";
import Error from "../../../shared/components/Error/Error";
import GamesList from "../components/GamesList/GamesList";
import SideBar from "../components/SideBar/SideBar";
import { selectError } from "../slice";
import st from "./HomePage.module.css";

const HomePage = () => {
  const error = useSelector(selectError);

  return (
    <main className={st.main}>
      <section className={st.gamesSection}>
        {error && <Error error={error} />}
        <GamesList />
        <SideBar onFilterChange={() => {}}/>
      </section>
    </main>
  );
};

export default HomePage;
