import { ActionAddExpense } from '../../types';
import { SET_USER } from '../reducers/user';
import { ADD_EXPENSE } from '../reducers/wallet';

export const actionUser = (email: string) => ({
  type: SET_USER,
  payload: { email },
});

export const actionAddExpense = (currency: ActionAddExpense) => ({
  type: ADD_EXPENSE,
  payload: { currency },
});
