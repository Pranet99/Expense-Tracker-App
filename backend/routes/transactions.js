const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

// Route to create a new transaction
router.post('/transactions', async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to get all transactions
router.get('/transactions', async (req, res) => {
  console.log('Received a GET request to /transactions');
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
