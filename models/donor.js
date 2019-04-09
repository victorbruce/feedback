const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        required: true
    }
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports.Donor = Donor;