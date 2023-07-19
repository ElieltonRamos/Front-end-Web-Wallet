import { ActionUser } from '../../types';

const INITIAL_STATE = { email: '' };
export const SET_USER = 'SET_USER';

const user = (state = INITIAL_STATE, action: ActionUser) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, email: action.payload.email };
    default: return state;
  }
};

export default user;
