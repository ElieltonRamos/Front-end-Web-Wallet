function WalletForm() {
  return (
    <form>
      <div>
        <label htmlFor="description">Descrição da despesa</label>
        <input type="text" id="description" data-testid="description-input" />
        <label htmlFor="category">Categoria da despesa</label>
        <input type="text" id="category" />
      </div>
      <div>
        <label htmlFor="value">Valor</label>
        <input type="number" id="value" data-testid="value-input" />
        <label htmlFor="methody">Método de pagamento</label>
        <input type="text" id="methody" />
        <label htmlFor="moeda">Moeda</label>
        <input type="" id="moeda" />
        { /* parei aqui falta colocar <select> */ }
      </div>
      <button type="submit">Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
