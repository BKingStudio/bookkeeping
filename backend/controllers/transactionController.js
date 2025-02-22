const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
    const { user, type, amount, description } = req.body;

    try {
        const transaction = new Transaction({ user, type, amount, description });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTransactions = async (req, res) => {
    const { userId } = req.params;
    
    try {
        const transactions = await Transaction.find({ user: userId });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
