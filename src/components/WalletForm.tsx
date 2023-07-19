import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddExpense } from '../redux/actions';
import { RootState } from '../types';

const initialFormExpense = {
  id: 1,
  description: '',
  tag: 'alimentacao',
  value: '',
  methody: 'Dinheiro',
  currency: 'USD',
};

function WalletForm() {
  const [expense, setExpense] = useState(initialFormExpense);
  const { currencies, expenses } = useSelector((state:RootState) => state.wallet);
  const dispatch = useDispatch();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { id, value } = event.target;
    setExpense({ ...expense, [id]: value });
  };

  const fetchCurrencies = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return data;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionAddExpense({
      ...expense,
      id: expenses.length,
      exchangeRates: await fetchCurrencies(),
    }));
    setExpense(initialFormExpense);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="description">Descrição da despesa</label>
        <input
          type="text"
          id="description"
          data-testid="description-input"
          value={ expense.description }
          onChange={ handleChange }
        />
        <label htmlFor="tag">Categoria da despesa</label>
        <select
          id="tag"
          data-testid="tag-input"
          value={ expense.tag }
          onChange={ handleChange }
        >
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </div>
      <div>
        <label htmlFor="value">Valor</label>
        <input
          type="number"
          id="value"
          data-testid="value-input"
          value={ expense.value }
          onChange={ handleChange }
        />
        <label htmlFor="methody">Método de pagamento</label>
        <select
          id="methody"
          data-testid="method-input"
          value={ expense.methody }
          onChange={ handleChange }
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
        <label htmlFor="currency">Moeda</label>
        <select
          id="currency"
          data-testid="currency-input"
          value={ expense.currency }
          onChange={ handleChange }
        >
          {currencies.map((moeda) => (
            <option key={ moeda } value={ moeda }>
              {moeda}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
