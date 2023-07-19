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

export type CurrencyData = {
  exchangeRates: Exchange[];
};

export type PayloadCurrency = {
  id: number,
  description: string,
  tag: string;
  value: string;
  methody: string;
  currency: string;
  exchangeRates: CurrencyData;
};

export type ActionUser = {
  type: string;
  payload: { email: string };
};

export type RootState = {
  user: { email: string };
  wallet: { expenses: PayloadCurrency[], currencies: string[] };
};

export type Dispatch = ThunkDispatch<RootState, null, AnyAction>;
