import st from './Preloader.module.css';
import { AiOutlineLoading } from "react-icons/ai";

const Preloader = () => {
  return (
    <div className={st.preloadContainer}>
        <AiOutlineLoading size={150} className={st.preload} />
    </div>
  )
}

export default Preloader