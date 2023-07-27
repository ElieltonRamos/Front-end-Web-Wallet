import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type ActionAddExpense = {
  type: string;
  payload: PayloadCurrency;
};

export type Exchange = {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
};

export type PayloadCurrency = {
  id: number,
  description: string,
  tag: string;
  value: string;
  method: string;
  currency: string;
  btnText?: string;
  exchangeRates: {
    [currency: string]: Exchange;
  };
};

export type ActionUser = {
  type: string;
  payload: { email: string };
};

export type RootState = {
  user: { email: string };
  wallet: {
    expenses: PayloadCurrency[], currencies: string[], editExpense: number,
  };
};

export type Dispatch = ThunkDispatch<RootState, null, AnyAction>;
