import { SET_USER } from '../reducers/user';

export const actionUser = (email: string) => ({
  type: SET_USER,
  payload: { email },
});
