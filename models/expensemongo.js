// models/Expense.js
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {  // ✅ REF to User collection
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usermongo',  // ✅ Collection name (tumhara model name)
    required: true,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Expense', expenseSchema);
