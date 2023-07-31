import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { vi } from 'vitest';

import App from '../App';
import { renderWithRouter, renderWithRouterAndRedux } from '../tests/helpers/renderWith';
import Wallet from '../pages/Wallet';
import store from '../redux';
import mockData from '../tests/helpers/mockData';

describe('Testando o componente Tbody', () => {
  it('Verifica se o componente está sendo renderizado', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockData),
    });
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const btnExpense = screen.getByRole('button', { name: /Adicionar despesa/i });
    await userEvent.click(btnExpense);
    const description = screen.getByRole('columnheader', { name: /descrição/i });
    const tag = screen.getByRole('columnheader', { name: /tag/i });
    const method = screen.getByRole('columnheader', { name: /método de pagamento/i });
    const value = screen.getByRole('columnheader', { name: 'Valor' });
    const currency = screen.getByRole('columnheader', { name: 'Moeda' });
    const exchangeRate = screen.getByRole('columnheader', { name: /câmbio utilizado/i });
    const convertedValue = screen.getByRole('columnheader', { name: /valor convertido/i });
    const convertedCurrency = screen.getByRole('columnheader', { name: /moeda de conversão/i });
    const editDelete = screen.getByRole('columnheader', { name: /editar\/excluir/i });
    const elementsTbody = [description, tag, method, value, currency, exchangeRate, convertedValue, convertedCurrency, editDelete];
    elementsTbody.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
  it('Verifica se os valores estão sendo renderizados e os botoes funcionam corretamente', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const btnAddExpense = screen.getByRole('button', { name: /adicionar despesa/i });
    const inputDescription = screen.getByRole('textbox', { name: /descrição da despesa/i });
    await userEvent.type(inputDescription, 'teste');
    const valueExpense = screen.getByRole('spinbutton', { name: /valor/i });
    await userEvent.type(valueExpense, '100');
    await userEvent.click(btnAddExpense);
    await waitFor(async () => {
      const btnEdit = screen.getByRole('button', { name: 'Editar' });
      await userEvent.click(btnEdit);
      await userEvent.type(inputDescription, 'editado');
      const btnSave = screen.getByRole('button', { name: /editar despesa/i });
      await userEvent.click(btnSave);
    });
    await waitFor(async () => {
      const btnDelete = screen.getByRole('button', { name: 'Excluir' });
      await userEvent.click(btnDelete);
      const expense = screen.queryByText('editado');
      expect(expense).not.toBeInTheDocument();
    });
  });
  it('Verifica se e tratado quando a requisição falha', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Erro na requisição')));
    renderWithRouter(<Provider store={ store }><Wallet /></Provider>);
  });
});
