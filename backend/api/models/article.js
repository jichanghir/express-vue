const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title are required']
    },
    body: {
        type: String,
        required: [true, 'Body are required']
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Article', articleSchema);

