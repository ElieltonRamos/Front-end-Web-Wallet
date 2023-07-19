import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from '../styles/login.module.css';
import { actionUser } from '../redux/actions';

function Login() {
  const [form, setForm] = useState({ email: '', password: '', btn: false });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setForm((prevState) => {
      const updatedForm = { ...prevState, [id]: value };
      return updatedForm;
    });
  };
  const regex = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const btnActive = form.password.length > 5 && regex.test(form.email);

  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionUser(form.email));
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
          value={ form.email }
          data-testid="email-input"
        />
        <input
          className={ styles.input }
          type="password"
          id="password"
          onChange={ handleChange }
          value={ form.password }
          data-testid="password-input"
        />
        <button
          className={ styles.btn }
          type="submit"
          disabled={ !btnActive }
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
