import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../slice';
import st from './LoginPage.module.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(username));
    navigate('/');
  };

  return (
    <main className={st.container}>
      <h1 className={st.title}>Enter nickname</h1>
      <form className={st.form} onSubmit={handleSubmit}>
        <div className={st.inputGroup}>
          <label className={st.label} htmlFor="username">Username</label>
          <input
            className={st.input}
            type="text"
            id="username"
            placeholder='Your nickname'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            maxLength={20}
          />
        </div>
        <button className={st.button} type="submit">Login</button>
      </form>
    </main>
  );
};

export default LoginPage;

