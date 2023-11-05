export default class ExpenseService {
    constructor() {
      this.transactions = []; // Llista per emmagatzemar transaccions
    }
  
    addTransaction(transaction) {
      this.transactions.push(transaction);
      this.updateBalance();
    }
  
    deleteTransaction(id) {
      this.transactions = this.transactions.filter(t => t.id !== id);
      this.updateBalance();
    }
  
    updateBalance() {
      const amounts = this.transactions.map(transaction => transaction.amount);
      const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
      document.getElementById('balance').textContent = `$${total}`;
      this.updateIncomeAndExpense();
    }
  
    updateIncomeAndExpense() {
      const amounts = this.transactions.map(transaction => transaction.amount);
      const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
  
      const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
  
      document.getElementById('money-plus').textContent = `+$${income}`;
      document.getElementById('money-minus').textContent = `-$${Math.abs(expense)}`;
    }
  }
  