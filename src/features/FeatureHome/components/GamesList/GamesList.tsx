import { useEffect } from "react";
import { useDispatch, useSelector } from "../../../../app/store";
import {
  fetchGamesThunk,
  selectGames,
} from "../../slice";
import st from "./GamesList.module.css";
import GameArticle from "../GameArticle/GameArticle";

const GamesList = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectGames);


  useEffect(() => {
    dispatch(fetchGamesThunk());
  }, [dispatch]);

  return (
    <ul className={st.gamesList}>
      {games.map((game) => (
        <GameArticle key={game.id} game={game} />
      ))}
    </ul>
  );
};

export default GamesList;
