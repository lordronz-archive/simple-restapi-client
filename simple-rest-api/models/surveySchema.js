const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
        max: 999,
        min: 0,
    },
    languages: {
        type: [String],
    }
});

module.exports = mongoose.model('surveys', surveySchema);