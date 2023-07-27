import { ActionAddExpense } from '../../types';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_EXPENSES = 'SET_EXPENSES';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  editExpense: -1,
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
    case SET_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
        editExpense: -1,
      };
    case EDIT_EXPENSE:
      return {
        ...state,
        editExpense: action.payload,
      };
    default: return state;
  }
};

export default wallet;
