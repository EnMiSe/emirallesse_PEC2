// expense.views.js
export default class ExpenseViews {
    constructor() {
      this.balanceElement = document.getElementById('balance');
      this.incomeElement = document.getElementById('money-plus');
      this.expenseElement = document.getElementById('money-minus');
      this.listElement = document.getElementById('list');
      this.form = document.getElementById('form');
      this.textInput = document.getElementById('text');
      this.amountInput = document.getElementById('amount');
    }
  
    displayTransactions(transactions) {
      this.listElement.innerHTML = '';
  
      transactions.forEach(transaction => {
        const sign = transaction.amount < 0 ? '-' : '+';
        const item = document.createElement('li');
        item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
        item.innerHTML = `
          ${transaction.text} <span>${sign}$${Math.abs(transaction.amount)}</span>
          <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">x</button>
        `;
  
        this.listElement.appendChild(item);
      });
    }
  
    updateBalance(income, expense, balance) {
      this.incomeElement.textContent = `+$${income}`;
      this.expenseElement.textContent = `-$${expense}`;
      this.balanceElement.textContent = `$${balance}`;
    }
  
    getTransactionInput() {
      return {
        text: this.textInput.value,
        amount: parseFloat(this.amountInput.value),
      };
    }
  
    clearInputs() {
      this.textInput.value = '';
      this.amountInput.value = '';
    }
  
    showValidationError(message) {
    }
  }
  