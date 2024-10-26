import { Link } from "react-router-dom";
import { GamesListSectionProps } from "../../utils/types";
import GameArticle from "../GameArticle/GameArticle";
import st from "./GamesListSection.module.css";

const GamesListSection: React.FC<GamesListSectionProps> = ({ label, data }) => {

  return (
    <section className={st.gamesSection}>
        <h2 className={st.gamesSectionTitle}>{label}</h2>
      <ul className={st.gamesSectionList}>
        {data.map((game) => (
          <GameArticle key={game.id} game={game} />
        ))}
      </ul>
        <Link to={'/games'} className={st.link}>See more</Link>
    </section>
  );
};

export default GamesListSection;

