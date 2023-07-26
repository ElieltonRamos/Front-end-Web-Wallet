import styles from '../styles/table.module.css';
import Tbody from './Tbody';

function Table() {
  return (
    <section className={ styles.container }>
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
        <Tbody />
      </table>
    </section>
  );
}

export default Table;
