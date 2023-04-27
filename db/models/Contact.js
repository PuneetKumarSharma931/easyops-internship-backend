const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true
    },
    Contact: {
        type: Number,
        required: true,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Contact = new mongoose.model('Contact', contactSchema);

module.exports = Contact;