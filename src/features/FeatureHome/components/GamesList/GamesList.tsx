/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
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
  const [page, setPage] = useState(1);
  const gamesPerPage = 20;
  const totalPages = Math.ceil(games.length / gamesPerPage);
  const currentGames = games.slice(
    (page - 1) * gamesPerPage,
    page * gamesPerPage
  );

  useEffect(() => {
    if (platform || sortBy || tags.length > 0) {
      dispatch(fetchFilterGamesThunk({ platform, tags: tags, sortBy }));
    }
  }, [dispatch, platform, sortBy, tags]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className={st.listContainer}>
      {(games as any).status_message ? (
        <Error error={(games as any).status_message} />
      ) : (
        <ul className={st.gamesList}>
          {!games.length && <h2>Начните искать</h2>}
          {isLoading === "loading" && <Preloader />}
          {currentGames.map((game: IGame) => (
            <GameArticle key={game.id} game={game} />
          ))}
        </ul>
      )}
      <div className={st.pagination}>
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={st.paginationButton}
        >
          Back
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className={st.paginationButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GamesList;
