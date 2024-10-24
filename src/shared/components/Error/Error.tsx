import { BiError } from "react-icons/bi";
import st from './Error.module.css';

interface IErrorProps {
    error: string | null;
}

const Error:React.FC<IErrorProps> = ({error}) => {
  return (
    <div className={st.errorContainer}>
        <h2 className={st.errorTitle}>{error}</h2>
        <BiError size={150} className={st.error} />
    </div>
  )
}

export default Error