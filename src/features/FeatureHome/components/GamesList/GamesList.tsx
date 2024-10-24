import { useEffect } from "react";
import { fetchGamesThunk, selectGames, selectIsLoading } from "../../slice";
import st from "./GamesList.module.css";
import GameArticle from "../GameArticle/GameArticle";
import Preloader from "../../../../shared/components/Preloader/Preloader";
import { useDispatch, useSelector } from "../../../../app/store/store";
import { IGame } from "../../../../shared/types/types";

const GamesList = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchGamesThunk());
  }, [dispatch]);

  return (
    <ul className={st.gamesList}>
      {isLoading === "loading" && <Preloader />}
      {games.slice(0, 20).map((game: IGame) => (
        <GameArticle key={game.id} game={game} />
      ))}
    </ul>
  );
};

export default GamesList;
