import { useSelector } from 'react-redux';
import stylesLogin from '../styles/login.module.css';
import styles from '../styles/header.module.css';
import { RootState } from '../types';
import WalletForm from './WalletForm';

function Header() {
  const { email } = useSelector((state: RootState) => state.user);
  const expenses = useSelector((state: RootState) => {
    return state.wallet.expenses.reduce((acc, curr) => {
      return acc + Number(curr.value) * Number(curr
        .exchangeRates[curr.currency].ask);
    }, 0).toFixed(2);
  });
  return (
    <header className={ styles.container }>
      <section className={ styles.containerData }>
        <div className={ styles.logoContainer }>
          <img
            className={ stylesLogin.emojiLogo }
            src="/imgs/emojiLogo.png"
            alt="emoji"
          />
          <img className={ stylesLogin.logo } src="/imgs/logo.svg" alt="logo" />
          <img className={ stylesLogin.logo } src="/imgs/logo01.svg" alt="Logo" />
        </div>
        <section className={ styles.containerInfos }>
          <img
            className={ styles.imgMoedas }
            src="/imgs/expensesIcon.svg"
            alt="expenses icon"
          />
          <span className={ styles.totalField }>Total de despesas: </span>
          <h3 data-testid="total-field" className={ styles.totalField }>
            {expenses}
          </h3>
          <span
            className={ styles.totalField }
            data-testid="header-currency-field"
          >
            BRL
          </span>
        </section>
        <section className={ styles.containerInfos }>
          <img
            className={ styles.imgPerfil }
            src="/imgs/perfil.svg"
            alt="Logo perfil"
          />
          <h3 data-testid="email-field" className={ styles.emailField }>{ email }</h3>
        </section>
      </section>
      <WalletForm />
    </header>
  );
}

export default Header;
