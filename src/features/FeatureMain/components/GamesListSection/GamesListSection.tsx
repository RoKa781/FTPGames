import { Link } from "react-router-dom";
import { GamesListSectionProps } from "../../utils/types";
import GameArticle from "../GameArticle/GameArticle";
import st from "./GamesListSection.module.css";
import { IoGameController } from "react-icons/io5";

const GamesListSection: React.FC<GamesListSectionProps> = ({
  label,
  data,
  link,
}) => {
  return (
    <section className={st.gamesSection}>
      <h2 className={st.gamesSectionTitle}>{label}</h2>
      <ul className={st.gamesSectionList}>
        {data.map((game) => (
          <GameArticle key={game.id} game={game} />
        ))}
      </ul>
      <Link to={link} className={st.link}>
        See more
        <IoGameController />
      </Link>
    </section>
  );
};

export default GamesListSection;
