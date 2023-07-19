import { useSelector } from 'react-redux';
import stylesLogin from '../styles/login.module.css';
import styles from '../styles/header.module.css';
import { RootState } from '../types';

function Header() {
  const { email } = useSelector((state: RootState) => state.user);
  const expenses = 0;
  return (
    <header className={ styles.container }>
      <div>
        <img className={ stylesLogin.emojiLogo } src="/imgs/emojiLogo.png" alt="emoji" />
        <img className={ stylesLogin.logo } src="/imgs/logo.svg" alt="logo" />
        <img className={ stylesLogin.logo } src="/imgs/logo01.svg" alt="Logo" />
      </div>
      <section>
        <img src="/imgs/expensesIcon.svg" alt="expenses icon" />
        <h3 data-testid="total-field">
          {`Total de despesas: ${expenses} `}
          <span data-testid="header-currency-field">BRL</span>
        </h3>
      </section>
      <section>
        <img src="/imgs/perfil.svg" alt="Logo perfil" />
        <h3 data-testid="email-field">{ email }</h3>
      </section>
    </header>
  );
}

export default Header;
