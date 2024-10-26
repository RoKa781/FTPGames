import { TbError404Off } from "react-icons/tb";
import st from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={st.notfoundContainer}>
      <h2 className={st.notfoundTitle}>
        Page not found
      </h2>
      <TbError404Off  size={290} className={st.notfoundSVG} />
    </div>
  )
}

export default NotFound