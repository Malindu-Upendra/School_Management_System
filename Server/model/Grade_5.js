const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const grade5Schema = Schema({

    RegistrationNumber: {
        type: String,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true,
    },
    ObjectIDOfUser:{
        type: String,
        required: true,
    },
    term1 : {
        Sinhala: { type: String, default:'not inserted' },
        MatheMatics: { type: String, default:'not inserted' },
        Environment: { type: String, default:'not inserted' },
        English: { type: String, default:'not inserted' },
        Buddhism: { type: String, default:'not inserted' }
    },
    term2 : {
        Sinhala: { type: String, default:'not inserted' },
        MatheMatics: { type: String, default:'not inserted' },
        Environment: { type: String, default:'not inserted' },
        English: { type: String, default:'not inserted' },
        Buddhism: { type: String, default:'not inserted' }
    },
    term3 : {
        Sinhala: { type: String, default:'not inserted' },
        MatheMatics: { type: String, default:'not inserted' },
        Environment: { type: String, default:'not inserted' },
        English: { type: String, default:'not inserted' },
        Buddhism: { type: String, default:'not inserted' }
    }
});

const grade5 = mongoose.model('Grade_5', grade5Schema);
module.exports = grade5;