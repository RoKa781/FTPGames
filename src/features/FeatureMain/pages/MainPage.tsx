import { Link } from "react-router-dom";
import st from "./MainPage.module.css";
import GamesListSection from "../components/GamesListSection/GamesListSection";
import { useDispatch, useSelector } from "../../../app/store/store";
import { fetchGamesMainThunk, selectGames, selectIsLoading } from "../slice";
import { useEffect } from "react";
import { filterSection, sectionsList } from "../utils/helper";
import Preloader from "../../../shared/components/Preloader/Preloader";

const MainPage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchGamesMainThunk());
  }, [dispatch]);

  return (
    <main className={st.mainPage}>
      <section className={st.sectionAbout}>
        <div className={st.sectionTextContainer}>
          <h2 className={st.sectionAboutTitle}>Welcome to Our Game Library</h2>
          <p className={st.sectionAboutText}>
            Discover a world of games tailored just for you. Browse through our
            collection and find the perfect game that matches your taste. Dive
            into an adventure, solve puzzles, or compete in thrilling challenges
            – the choice is yours!
          </p>
        </div>
        <Link to={"/games"} className={st.sectionAboutLink}>
          Find your game
        </Link>
      </section>
      
      {loading === 'loading' && <Preloader />}
      
      {loading === 'succeeded' && (
        sectionsList.map((section) => (
          <GamesListSection
            key={section.name}
            label={section.name}
            data={filterSection(section.name, games)}
            link={section.link}
          />
        ))
      )}
    </main>
  );
};

export default MainPage;
