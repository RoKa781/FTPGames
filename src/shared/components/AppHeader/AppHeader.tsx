import { NavLink } from "react-router-dom";
import st from "./AppHeader.module.css";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const AppHeader = () => {
  return (
    <header className={st.header}>
      <h1 className={st.title}>Play for Free</h1>
      <nav className={st.navContainer}>
        <NavLink to="/" className={({ isActive }) => (isActive ? `${st.link} ${st.active}` : st.link)}>
          Home
        </NavLink>
        <NavLink to="/games" className={({ isActive }) => (isActive ? `${st.link} ${st.active}` : st.link)}>
          Find Game
        </NavLink>
        <NavLink to="/favorite" className={({ isActive }) => (isActive ? `${st.link} ${st.active}` : st.link)}>
          Your Favorite
        </NavLink>
      </nav>
      <ThemeToggler />
    </header>
  );
};

export default AppHeader;


