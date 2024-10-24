import { useSelector } from "../../../app/store";
import Error from "../../../shared/components/Error/Error";
import Preloader from "../../../shared/components/Preloader/Preloader";
import GamesList from "../components/GamesList/GamesList";
import { selectError, selectIsLoading } from "../slice";
import st from "./HomePage.module.css";

const HomePage = () => {

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <main className={st.main}>
      {isLoading === 'loading' && <Preloader />}
      {error && <Error error={error}/>}
      <GamesList />
    </main>
  );
};

export default HomePage;
