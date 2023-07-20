import { useSelector } from 'react-redux';
import { RootState } from '../types';

function Table() {
  const expenses = useSelector((state: RootState) => state.wallet.expenses);
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
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
                <td>Editar/Excluir</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
