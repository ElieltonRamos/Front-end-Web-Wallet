import { useState } from 'react';

const initialFormExpense = {
  description: '',
  category: '',
  value: 0,
  methody: '',
  moeda: '',
};

function WalletForm() {
  const [expense, setExpense] = useState(initialFormExpense);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { id, value } = event.target;
    setExpense({ ...expense, [id]: value });
  };

  return (
    <form>
      <div>
        <label htmlFor="description">Descrição da despesa</label>
        <input
          type="text"
          id="description"
          data-testid="description-input"
          value={ expense.description }
          onChange={ handleChange }
        />
        <label htmlFor="category">Categoria da despesa</label>
        <select
          id="category"
          data-testid="tag-input"
          value={ expense.category }
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
        <label htmlFor="moeda">Moeda</label>
        <select
          id="moeda"
          data-testid="currency-input"
          value={ expense.moeda }
          onChange={ handleChange }
        >
          <option value="BRL">BRL</option>
          <option value="BRL">usd</option>
        </select>
      </div>
      <button type="submit">Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
