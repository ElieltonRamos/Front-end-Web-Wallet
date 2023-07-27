import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import App from '../App';
import { renderWithRouterAndRedux } from '../tests/helpers/renderWith';

describe('Testes do componente Header', () => {
  it('Verifica se o header e renderizado', async () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    await userEvent.click(inputEmail);
    await userEvent.type(inputEmail, 'alguem@gmail.com');
    await userEvent.click(inputPassword);
    await userEvent.type(inputPassword, '1234567');
    const buttonLogin = screen.getByRole('button', { name: /entrar/i });
    await userEvent.click(buttonLogin);
    const textExpense = screen.getByText(/Despesas/i);
    expect(textExpense).toBeInTheDocument();
    const totalExpense = screen.getByText(/Total de Despesas:/i);
    expect(totalExpense).toBeInTheDocument();
    const user = screen.getByRole('heading', { name: /alguem@gmail.com/i });
    expect(user).toBeInTheDocument();
  });
});
