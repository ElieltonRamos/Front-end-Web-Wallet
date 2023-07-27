import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { actionRequestCoins } from '../redux/actions';
import { Dispatch } from '../types';
import Table from '../components/Table';
import styles from '../styles/wallet.module.css';

function Wallet() {
  const dispatch: Dispatch = useDispatch();

  dispatch(actionRequestCoins());

  return (
    <main className={ styles.containerMain }>
      <div className={ styles.header }>
        <Header />
      </div>
      <div className={ styles.table }>
        <Table />
      </div>
    </main>
  );
}

export default Wallet;
