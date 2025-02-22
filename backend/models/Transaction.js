const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['sale', 'purchase', 'credit', 'debit'], required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
