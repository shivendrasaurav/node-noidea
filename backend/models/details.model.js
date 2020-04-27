const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userdetails = new Schema({
    name: {type: String, required: true},
    contact: {type: Number, required: true},
    address: {type: String, required: true},
    pincode: {type: String, required: true},
}, {
    timestamps: true,
});

const Details = mongoose.model('Details', userdetails);

module.exports = Details;