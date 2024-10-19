const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: { type: String, required: true },  // Income, Expenses, Savings, Loans/EMIs
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  isRecurring: { type: String },
  isImportant: { type: String },
  duration: { type: String },
  dateOfCompletion: { type: Date },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
