import ExpenseService from '../services/expense.service.js';
import ExpenseViews from '../views/expense.views.js';

export default class ExpenseController {
  constructor(service, views) {
    this.service = service;
    this.views = views;
    this.views.form.addEventListener('submit', this.addTransaction.bind(this));
    this.init();
  }

  init() {
    const transactions = this.service.getTransactions();
    this.views.displayTransactions(transactions);
    this.updateBalance();
  }

  addTransaction(event) {
    event.preventDefault();
    const { text, amount } = this.views.getTransactionInput();

    if (!text || isNaN(amount)) {
      this.views.showValidationError('Please enter a valid text and amount.');
      return;
    }

    const transaction = this.service.addTransaction(text, amount);
    this.views.displayTransactions(this.service.getTransactions());
    this.updateBalance();
    this.views.clearInputs();
  }

  updateBalance() {
    const { income, expense, balance } = this.service.getTotals();
    this.views.updateBalance(income, expense, balance);
  }
}

import ExpenseService from './services/expense.service.js';
import ExpenseViews from './views/expense.views.js';
import ExpenseController from './controllers/expense.controller.js';

document.addEventListener('DOMContentLoaded', () => {
  const service = new ExpenseService();
  const views = new ExpenseViews();
  new ExpenseController(service, views);
});
