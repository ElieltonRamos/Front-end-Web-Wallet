import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddExpense } from '../redux/actions';
import { RootState } from '../types';
import styles from '../styles/WalletForm.module.css';

const initialFormExpense = {
  id: 1,
  description: '',
  tag: 'alimentacao',
  value: '',
  method: 'Dinheiro',
  currency: 'USD',
};

function WalletForm() {
  const [expense, setExpense] = useState(initialFormExpense);
  const { currencies, expenses } = useSelector((state: RootState) => state.wallet);
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
    <form className={ styles.container } onSubmit={ handleSubmit }>
      <div className={ styles.containerInputs }>
        <label
          htmlFor="description"
          className={ styles.label }
        >
          Descrição da despesa
        </label>
        <input
          className={ styles.input }
          type="text"
          id="description"
          data-testid="description-input"
          value={ expense.description }
          onChange={ handleChange }
        />
        <label className={ styles.label } htmlFor="tag">Categoria da despesa</label>
        <select
          className={ styles.input }
          id="tag"
          data-testid="tag-input"
          value={ expense.tag }
          onChange={ handleChange }
        >
          <option value="Alimentacao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
      </div>
      <div className={ styles.containerInputs }>
        <label className={ styles.label } htmlFor="value">Valor</label>
        <input
          className={ styles.input }
          type="number"
          id="value"
          data-testid="value-input"
          value={ expense.value }
          onChange={ handleChange }
        />
        <label className={ styles.label } htmlFor="method">Método de pagamento</label>
        <select
          className={ styles.input }
          id="method"
          data-testid="method-input"
          value={ expense.method }
          onChange={ handleChange }
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <label className={ styles.label } htmlFor="currency">Moeda</label>
        <select
          className={ styles.input }
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
      <button className={ styles.button } type="submit">Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
