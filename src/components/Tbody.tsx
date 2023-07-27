import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types';
import { actionEditExpense, actionSetExpenses } from '../redux/actions';

function Tbody() {
  const expenses = useSelector((state: RootState) => state.wallet.expenses);
  const dispatch = useDispatch();

  const handleClickDelete = (id: number) => {
    const newListExpenses = expenses.filter((expense) => expense.id !== id);
    dispatch(actionSetExpenses(newListExpenses));
  };

  const handleClickEdit = (id: number) => {
    dispatch(actionEditExpense(id));
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
              <button data-testid="delete-btn" onClick={ () => handleClickDelete(id) }>
                <img src="imgs/btnDelete.svg" alt="delete" />
              </button>
              <button data-testid="edit-btn" onClick={ () => handleClickEdit(id) }>
                Editar
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default Tbody;
