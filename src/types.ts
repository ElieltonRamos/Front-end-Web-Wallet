export type ActionUser = {
  type: string;
  payload: { email: string };
};

export type RootState = {
  user: { email: string };
  wallet: { currencies: [] };
};
