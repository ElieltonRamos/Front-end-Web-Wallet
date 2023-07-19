import { ActionAddExpense } from '../../types';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
export const ADD_EXPENSE = 'ADD_EXPENSE';
const INITIAL_STATE = {
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action: ActionAddExpense) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        expenses: [...state.expenses, action.payload],
      };
    default: return state;
  }
};

export default wallet;
