import ThemeToggler from '../ThemeToggler/ThemeToggler'
import st from './AppHeader.module.css'

const AppHeader = () => {
  return (
      <header className={st.header} >
        <h1 className={st.title}>
            Play for Free
        </h1>
        <ThemeToggler />
      </header>
  )
}

export default AppHeader