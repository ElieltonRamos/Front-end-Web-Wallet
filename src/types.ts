export type ActionAddExpense = {
  type: string;
  payload: PayloadCurrency;
};

export type PayloadCurrency = {
  id: number,
  description: string,
  category:string
  value: string;
  methody: string;
  moeda: string;
};

export type ActionUser = {
  type: string;
  payload: { email: string };
};

export type RootState = {
  user: { email: string };
  wallet: { currencies: [] };
};
