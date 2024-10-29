import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../../app/store/store";
import {
  fetchGameThunk,
  selectError,
  selectGame,
  selectIsLoading,
} from "../slice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import st from "./GamePage.module.css";
import Preloader from "../../../shared/components/Preloader/Preloader";
import Error from "../../../shared/components/Error/Error";
import LikeButton from "../../../shared/components/LikeButton/LikeButton";

const GamePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchGameThunk(id));
    }
  }, [dispatch, id]);

  if (isLoading === "loading") {
    return <Preloader />;
  }

  if (error) {
    return <Error error={error} />
  }

  return (
    <div className={st.gamePage}>
      <div className={st.imageSection}>
        <img src={game?.thumbnail} alt={game?.title} className={st.thumbnail} />
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{enabled: true, type: 'progressbar'}}
          className={st.slider}
        >
          {game?.screenshots.map((screenshot) => (
            <SwiperSlide key={screenshot.id}>
              <img
                src={screenshot.image}
                alt="Screenshot"
                className={st.screenshot}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={st.infoSection}>
        <LikeButton id={String(id)} />
        <Link to={"/"} className={st.playLink}>
          Back to games list
        </Link>
        <h1 className={st.title}>{game?.title}</h1>
        <p className={st.status}>Status: {game?.status}</p>
        <p className={st.description}>{game?.description}</p>
        <a
          href={game?.game_url}
          target="_blank"
          rel="noopener noreferrer"
          className={st.playLink}
        >
          Play Now
        </a>

        <div className={st.details}>
          <h3>Details</h3>
          <p>
            <strong>Genre:</strong> {game?.genre}
          </p>
          <p>
            <strong>Platform:</strong> {game?.platform}
          </p>
          <p>
            <strong>Publisher:</strong> {game?.publisher}
          </p>
          <p>
            <strong>Developer:</strong> {game?.developer}
          </p>
          <p>
            <strong>Release Date:</strong> {game?.release_date}
          </p>
        </div>

        {game?.minimum_system_requirements && (
          <div className={st.systemRequirements}>
            <h3>Minimum System Requirements</h3>
            <p>
              <strong>OS:</strong> {game.minimum_system_requirements.os}
            </p>
            <p>
              <strong>Processor:</strong>{" "}
              {game.minimum_system_requirements.processor}
            </p>
            <p>
              <strong>Memory:</strong> {game.minimum_system_requirements.memory}
            </p>
            <p>
              <strong>Graphics:</strong>{" "}
              {game.minimum_system_requirements.graphics}
            </p>
            <p>
              <strong>Storage:</strong>{" "}
              {game.minimum_system_requirements.storage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
