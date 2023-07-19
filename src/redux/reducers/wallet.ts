import { ActionAddExpense } from '../../types';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const SET_CURRENCIES = 'SET_CURRENCIES';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action: ActionAddExpense) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case SET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    default: return state;
  }
};

export default wallet;
