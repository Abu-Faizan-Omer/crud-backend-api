// routes/expense.js
const express = require('express');
const router = express.Router();
const expenseControllers = require('../controllers/expensemongo');
const { authenticate } = require('../middleware/auth');

// Protected routes only
router.use(authenticate);

router.get('/expenses', expenseControllers.getAllExpenses);
router.post('/expenses', expenseControllers.createExpense);

module.exports = router;
