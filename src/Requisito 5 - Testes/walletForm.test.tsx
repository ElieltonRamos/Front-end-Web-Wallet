import { screen } from '@testing-library/dom';
import App from '../App';
import { renderWithRouterAndRedux } from '../tests/helpers/renderWith';

describe('Testes do componente WalletForm', () => {
  it('Verifica se o componente e renderizado', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const inputDescription = screen.getByTestId('description-input');
    const inputTag = screen.getByTestId('tag-input');
    const inputValue = screen.getByTestId('value-input');
    const inputCurrency = screen.getByTestId('currency-input');
    const inputMethod = screen.getByTestId('method-input');
    const inputMoeda = screen.getByTestId('currency-input');
    const btnExpense = screen.getByRole('button', { name: /adicionar despesa/i });
    const walletForm = [inputDescription, inputTag, inputValue, inputCurrency, inputMethod, inputMoeda, btnExpense];
    walletForm.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
