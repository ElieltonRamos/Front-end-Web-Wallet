import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types';
import { actionSetExpenses } from '../redux/actions';

function Tbody() {
  const expenses = useSelector((state: RootState) => state.wallet.expenses);
  const dispatch = useDispatch();

  const handleClick = (id: number) => {
    const newListExpenses = expenses.filter((expense) => expense.id !== id);
    dispatch(actionSetExpenses(newListExpenses));
  };

  return (
    <tbody>
      {expenses.map((expense) => {
        const { id, description, tag, method,
          value, currency, exchangeRates } = expense;
        const { ask } = exchangeRates[currency];
        const convertedValue = Number(ask) * Number(value);
        return (
          <tr key={ id }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{Number(value).toFixed(2)}</td>
            <td>{exchangeRates[currency].name}</td>
            <td>{Number(ask).toFixed(2)}</td>
            <td>{Number(convertedValue).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button
                data-testid="delete-btn"
                onClick={ () => handleClick(id) }
              >
                <img src="imgs/btnDelete.svg" alt="delete" />
              </button>
              <button>Editar</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default Tbody;
