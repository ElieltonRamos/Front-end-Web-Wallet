import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/login.module.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '', btn: false });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const btnActive = id === 'senha' ? value.length >= 6 : false;
    setForm({ ...form, [id]: value, btn: btnActive });
    console.log(btnActive);
  };

  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/carteira');
  };

  return (
    <main className={ styles.loginContainer }>
      <form onSubmit={ handleSubmitLogin } className={ styles.container }>
        <div>
          <img className={ styles.emojiLogo } src="/imgs/emojiLogo.png" alt="emoji" />
          <img className={ styles.logo } src="/imgs/logo.svg" alt="logo" />
          <img className={ styles.logo } src="/imgs/logo01.svg" alt="Logo" />
        </div>
        <input
          className={ styles.input }
          type="email"
          id="email"
          onChange={ handleChange }
          data-testid="email-input"
        />
        <input
          className={ styles.input }
          type="password"
          id="senha"
          onChange={ handleChange }
          data-testid="password-input"
        />
        <button
          className={ styles.btn }
          type="submit"
          disabled={ !form.btn }
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
