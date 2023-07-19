import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { actionRequestCoins } from '../redux/actions';
import { Dispatch } from '../types';

function Wallet() {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionRequestCoins());
  }, []);

  return (
    <main>
      <Header />
      <WalletForm />
    </main>
  );
}

export default Wallet;
