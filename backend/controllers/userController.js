const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.registerUser = async (req, res) => {
    const { username, password, email, businessName, ownerName, numberOfStaff, contactDetails, address } = req.body;

    try {
        const user = new User({ username, password, email, businessName, ownerName, numberOfStaff, contactDetails, address });
        await user.save();
        
        const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
