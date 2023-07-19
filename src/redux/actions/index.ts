import { Dispatch } from 'redux';
import { PayloadCurrency } from '../../types';
import { SET_USER } from '../reducers/user';
import { ADD_EXPENSE, REQUEST_FAILED,
  REQUEST_SUCCESS, SET_CURRENCIES } from '../reducers/wallet';

export const actionUser = (email: string) => ({
  type: SET_USER,
  payload: { email },
});

export const actionAddExpense = (currency: PayloadCurrency) => ({
  type: ADD_EXPENSE,
  payload: currency,
});

const requestSuccess = (data: any) => ({
  type: REQUEST_SUCCESS,
  payload: data,
});

const setCurrencies = (data: any) => ({
  type: SET_CURRENCIES,
  payload: data,
});

const requestFailed = (error: any) => ({
  type: REQUEST_FAILED,
  payload: error,
});

export const actionRequestCoins = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const coinsNames = Object.keys(data).filter((coin) => coin !== 'USDT');
      dispatch(setCurrencies(coinsNames));
    } catch (error) {
      requestFailed(error);
    }
  };
};
