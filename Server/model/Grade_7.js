const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const grade7Schema = Schema({

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
        Mathematics: { type: String, default:'not inserted' },
        Science: { type: String, default:'not inserted' },
        HealthStudies: { type: String, default:'not inserted' },
        English: { type: String, default:'not inserted' },
        Buddhism: { type: String, default:'not inserted' },
        History: { type: String, default:'not inserted' },
        Geography: { type: String, default:'not inserted' },
        Civics: { type: String, default:'not inserted' },
        Art: { type: String, default:'not inserted' },
        Tamil: { type: String, default:'not inserted' },
        Islam: { type: String, default:'not inserted' }
    },
    term2 : {
        Sinhala: { type: String, default:'not inserted' },
        Mathematics: { type: String, default:'not inserted' },
        Science: { type: String, default:'not inserted' },
        HealthStudies: { type: String, default:'not inserted' },
        English: { type: String, default:'not inserted' },
        Buddhism: { type: String, default:'not inserted' },
        History: { type: String, default:'not inserted' },
        Geography: { type: String, default:'not inserted' },
        Civics: { type: String, default:'not inserted' },
        Art: { type: String, default:'not inserted' },
        Tamil: { type: String, default:'not inserted' },
        Islam: { type: String, default:'not inserted' }
    },
    term3 : {
        Sinhala: { type: String, default:'not inserted' },
        Mathematics: { type: String, default:'not inserted' },
        Science: { type: String, default:'not inserted' },
        HealthStudies: { type: String, default:'not inserted' },
        English: { type: String, default:'not inserted' },
        Buddhism: { type: String, default:'not inserted' },
        History: { type: String, default:'not inserted' },
        Geography: { type: String, default:'not inserted' },
        Civics: { type: String, default:'not inserted' },
        Art: { type: String, default:'not inserted' },
        Tamil: { type: String, default:'not inserted' },
        Islam: { type: String, default:'not inserted' }
    }
});

const grade7 = mongoose.model('Grade_7', grade7Schema);
module.exports = grade7;