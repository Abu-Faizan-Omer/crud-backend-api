// controllers/expense.js
const Expense = require('../models/expensemongo');

// GET /expenses → ALL expenses with FULL user details!
exports.getAllExpenses = async (req, res) => {
  try {
    // ✅ MAGIC: populate('userId') → ObjectId → Full User!
    const expenses = await Expense.find()
      .populate('userId', 'name email')  // Sirf name, email populate karo
      .select('-__v');  // Hidden fields hide

    res.json(expenses);
  } catch (err) {
    console.error('Get expenses error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// CREATE expense (userId from JWT token)
exports.createExpense = async (req, res) => {
  try {
    const { amount, description } = req.body;
    const userId = req.userId;  // From auth middleware

    const expense = await Expense.create({
      amount,
      description,
      userId,  // Current logged-in user
    });

    // ✅ Single expense bhi populate karke return
    const populatedExpense = await Expense.findById(expense._id)
      .populate('userId', 'name email');

    res.status(201).json(populatedExpense);
  } catch (err) {
    console.error('Create expense error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
