
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Data Structure Of SubjectNotice
const subjectMaterialSchema = Schema({
    term: {
        type: String,
        required: true,
    },
    week:{
        type: String,
        required: true
    },
    subjectChoose:{
        type: String,
        required: true
    },
    unitName:{
        type: String,
        required: true
    },
    lectureLink:{
        type: String,
        required: true
    },
    lessonUpload:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "teacher"
    }
});

const subjectMaterial = mongoose.model('subjectMaterials', subjectMaterialSchema);
module.exports = subjectMaterial;