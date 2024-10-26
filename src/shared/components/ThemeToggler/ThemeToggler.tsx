import st from "./ThemeToggler.module.css";
import { useEffect, useState } from "react";
import { PiSunHorizonFill } from "react-icons/pi";
import { BsFillMoonStarsFill } from "react-icons/bs";

const ThemeToggler = () => {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, [isLight]);

  return (
    <div className={st.themeToggler} onClick={toggleTheme}>
      <BsFillMoonStarsFill
        size={30}
        className={`${st.themeSVG} ${isLight ? st.moon : st.sun}`}
      />
      <PiSunHorizonFill
        size={40}
        className={`${st.themeSVG} ${isLight ? st.sun : st.moon}`}
      />
    </div>
  );
};

export default ThemeToggler;
