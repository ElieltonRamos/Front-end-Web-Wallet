import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { actionRequestCoins } from '../redux/actions';
import { Dispatch } from '../types';
import Table from '../components/Table';

function Wallet() {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionRequestCoins());
  }, []);

  return (
    <main>
      <Header />
      <Table />
    </main>
  );
}

export default Wallet;
