import st from "./ThemeToggler.module.css";
import { useEffect } from "react";
import { PiSunHorizonFill } from "react-icons/pi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useDispatch, useSelector } from "../../../app/store/store";
import { selectIsLight, toggleTheme } from "../../../features/FeatureUser/slice";

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const isLight = useSelector(selectIsLight);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.body.classList.toggle("light-theme", isLight);
  }, [isLight]);

  return (
    <div className={st.themeToggler} onClick={handleToggle}>
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
