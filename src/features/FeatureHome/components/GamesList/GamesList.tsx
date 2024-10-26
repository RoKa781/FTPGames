/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import {
  fetchFilterGamesThunk,
  selectGames,
  selectIsLoading,
  selectQuery,
} from "../../slice";
import st from "./GamesList.module.css";
import GameArticle from "../GameArticle/GameArticle";
import Preloader from "../../../../shared/components/Preloader/Preloader";
import { useDispatch, useSelector } from "../../../../app/store/store";
import { IGame } from "../../../../shared/types/types";
import Error from "../../../../shared/components/Error/Error";

const GamesList = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  const isLoading = useSelector(selectIsLoading);
  const { platform, sortBy, tags } = useSelector(selectQuery);

  useEffect(() => {
    if (platform || sortBy || tags.length > 0) {
      dispatch(fetchFilterGamesThunk({ platform, tags: tags, sortBy }));
    }
  }, [dispatch, platform, sortBy, tags]);

  return (
    <>
      {(games as any).status_message ? (
        <Error error={(games as any).status_message} />
      ) : (
        <ul className={st.gamesList}>
          {!games.length && <h2>Начните искать</h2>}
          {isLoading === "loading" && <Preloader />}
          {games.slice(0, 20).map((game: IGame) => (
            <GameArticle key={game.id} game={game} />
          ))}
        </ul>
      )}
    </>
  );
};

export default GamesList;
