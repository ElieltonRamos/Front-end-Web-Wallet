import App from '../App';
import { renderWithRouterAndRedux } from '../tests/helpers/renderWith';

describe('Testes da pagina de login', () => {
  it('Verifica se a pagina de login é renderizada', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });
});
