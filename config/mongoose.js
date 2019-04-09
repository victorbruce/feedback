const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/online_payments', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(() => console.error('Failed to connect to MongoDB'));

module.exports = {mongoose};